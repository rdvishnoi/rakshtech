import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '@/components/ui/Logo';
import Button from '@/components/ui/Button';
import { useScrolled } from '@/hooks/useScrolled';
import { NAV_LINKS } from '@/data/content';

export default function Navbar() {
  const scrolled = useScrolled();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const solid = scrolled || menuOpen;
  const linkClass = solid
    ? 'text-slate-600 hover:text-primary-950'
    : 'text-slate-300 hover:text-white';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? 'border-b border-slate-200/70 bg-white/85 shadow-sm shadow-primary-950/5 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav aria-label="Main navigation" className="section-shell flex items-center justify-between py-4">
        <Logo tone={solid ? 'light' : 'dark'} />

        <ul className="hidden items-center gap-1 xl:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-300 after:absolute after:inset-x-3.5 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-accent-400 after:transition-transform after:duration-300 hover:after:scale-x-100 ${linkClass}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <Button href="#contact" variant={solid ? 'secondary' : 'primary'} className="!px-5 !py-2.5">
              Let&apos;s Discuss Your Project
            </Button>
          </div>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className={`relative flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-300 xl:hidden ${
              solid ? 'text-primary-950 hover:bg-slate-100' : 'text-white hover:bg-white/10'
            }`}
          >
            <Menu
              className={`absolute h-6 w-6 transition-all duration-300 ${
                menuOpen ? 'rotate-90 scale-50 opacity-0' : 'rotate-0 scale-100 opacity-100'
              }`}
            />
            <X
              className={`absolute h-6 w-6 transition-all duration-300 ${
                menuOpen ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-50 opacity-0'
              }`}
            />
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`overflow-hidden bg-white transition-[max-height,opacity] duration-500 ease-out xl:hidden ${
          menuOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="section-shell flex flex-col gap-1 border-t border-slate-200 py-4">
          {NAV_LINKS.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              tabIndex={menuOpen ? 0 : -1}
              onClick={() => setMenuOpen(false)}
              style={{ transitionDelay: menuOpen ? `${index * 40}ms` : '0ms' }}
              className={`rounded-xl px-4 py-3 text-base font-medium text-primary-950 transition-all duration-300 hover:bg-slate-100 hover:text-secondary-600 ${
                menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-3">
            <Button href="#contact" className="w-full" showArrow>
              Let&apos;s Discuss Your Project
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
