import IdCard from './id-card';
import execConfig from '@config/exec-config';

export default function PeopleInvolved({}) {
  const sortedOrganisers = execConfig.team.sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  return (
    <div className="mb-4 w-full mx-auto xl:px-16">
      <div className="flex flex-wrap gap-2 px-2 text-white justify-center">
        {sortedOrganisers.map((person) => (
          <IdCard
            key={person.name}
            name={person.name}
            year={person.year}
            course={person.course}
            role={person.roles.join(', ')}
            image={person.image}
          />
        ))}
      </div>
    </div>
  );
}