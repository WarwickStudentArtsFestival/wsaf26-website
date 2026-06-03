import { fetchPretalxSchedule, PretalxScheduleRoom } from '@/lib/pretalx';
import { StaticImageData } from 'next/image';
import venuesConfig from '@config/venues-config';
import Placeholder from '@/assets/hero.jpg';

function simpleSlugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export type AdditionalVenueData = {
  imageAlt: string;
  mapUrl: string;
  image: StaticImageData;
  roomLocation: string;
  slug: string;
  filterBitFieldIndex: number;
};

export type Venue = {
  id: string;
  name: string;
  description: string;
} & AdditionalVenueData;

export type VenueWithEventCount = Venue & {
  eventCount: number;
};

function constructVenueFromPretalxRoom(
  room: PretalxScheduleRoom,
): Venue | null {
  const venue = {
    id: room.guid,
    name: room.name,
    description: room.description,
  };

  const additionalVenueData = venuesConfig.venues[room.guid];
  if (!additionalVenueData) {
    // Fall back to a minimal venue entry so the app can render schedules
    const fallback = {
      mapUrl: '',
      image: Placeholder,
      imageAlt: room.name,
      roomLocation: room.name,
      slug: simpleSlugify(room.name || room.guid || 'venue'),
      filterBitFieldIndex: 0,
    };

    return {
      ...venue,
      ...fallback,
    };
  }

  return {
    ...venue,
    ...additionalVenueData,
  };
}

export async function fetchVenues(): Promise<Venue[]> {
  const schedule = await fetchPretalxSchedule();
  const rooms =
    schedule.schedule.conference.rooms.length > 0
      ? schedule.schedule.conference.rooms
      : Object.keys(
          schedule.schedule.conference.days.reduce<Record<string, true>>(
            (acc, day) => {
              Object.keys(day.rooms).forEach((roomName) => {
                acc[roomName] = true;
              });
              return acc;
            },
            {},
          ),
        ).map((roomName) => ({
          name: roomName,
          guid: roomName,
          description: roomName,
          capacity: null,
        }));

  return rooms.map(constructVenueFromPretalxRoom).filter((v) => v !== null);
}

export async function fetchVenuesWithEventCount(): Promise<
  VenueWithEventCount[]
> {
  const venues = await fetchVenues();
  const venuesWithEventCount = venues.map((venue) => ({
    ...venue,
    eventCount: 0,
  }));

  const schedule = await fetchPretalxSchedule();
  for (const day of schedule.schedule.conference.days) {
    for (const roomName of Object.keys(day.rooms)) {
      const venue = venuesWithEventCount.find((v) => v.name === roomName);
      if (venue) {
        venue.eventCount += day.rooms[roomName].length;
      }
    }
  }

  return venuesWithEventCount;
}

export async function fetchVenue(id: string): Promise<Venue | null> {
  const venues = await fetchVenues();
  return venues.find((v) => v.id === id) || null;
}

export function findVenue(id: string, venues: Venue[]): Venue | null {
  return venues.find((v) => v.id === id) || null;
}

export async function fetchVenueFromSlug(slug: string): Promise<Venue | null> {
  const venues = await fetchVenues();
  return venues.find((v) => v.slug === slug) || null;
}

export function findVenueFromName(name: string, venues: Venue[]): Venue | null {
  return venues.find((v) => v.name === name) || null;
}

export async function fetchVenueFromName(name: string): Promise<Venue | null> {
  const venues = await fetchVenues();
  return venues.find((v) => v.name === name) || null;
}
