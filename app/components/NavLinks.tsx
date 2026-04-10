import Link from 'next/link';
import { usePathname } from 'next/navigation';
import eventsConfig from '@config/events-config';

interface Props {
  onClick?: () => void;
}

interface NavItem {
  shortLabel: string;
  longLabel?: string;
  href: string;
}

const navItems: NavItem[] = eventsConfig.enabled
  ? [
      { shortLabel: 'Events', href: '/events' },
      { shortLabel: 'Venues', href: '/venues' },
    ]
  : [
      {
        shortLabel: 'Perform',
        longLabel: 'Perform or Exhibit',
        href: '/perform',
      },
      {
        shortLabel: 'Crew',
        longLabel: 'Join the Crew',
        href: '/crew',
      },
    ];

export default function NavLinks({ onClick }: Props) {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <ul className="flex flex-col sm:flex-row sm:items-center z-65 flex-1 gap-2 sm:gap-0 md:gap-2 lg:gap-6 font-semibold uppercase">
      {navItems.map(({ shortLabel, longLabel, href }) => {
        const active = isActive(href);
        return (
          <li key={href}>
            <Link
              href={href}
              onClick={onClick}
              className={`flex h-full items-center justify-center px-0.5 py-2 md:px-1.5 lg:px-2 underline-offset-4 hover:underline leading-tight sm:max-w-24 md:max-w-28 lg:max-w-none sm:text-center whitespace-normal ${
                active ? 'text-yellow-400' : 'text-white'
              }`}
              title={longLabel ?? shortLabel}
              aria-label={longLabel ?? shortLabel}
            >
              <span className="inline">
                {longLabel ? (
                  <>
                    <span className="hidden xs:inline">{longLabel}</span>
                    <span className="inline xs:hidden">{shortLabel}</span>
                  </>
                ) : (
                  shortLabel
                )}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
