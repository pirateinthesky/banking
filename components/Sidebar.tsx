'use client'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { Link2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Sidebar = ({ user }: SidebarProps) => {
    const pathname = usePathname();

  return (
    <section className="sidebar w-64 min-w-[250px] bg-white border-r border-gray-200 p-4 transition-all max-md:w-16 max-md:min-w-[64px]">
      <nav className="flex flex-col gap-4">
      <Link href="/" className="mb-12 flex items-center gap-2 cursor-pointer">
          <Image 
            src='/icons/logo.svg'
            width={34}
            height={34}
            alt='Horizon Logo'
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="sidebar-logo text-2xl font-bold text-gray-900 max-xl:block">
            Horizon
          </h1>
        </Link>

        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

          return (
            <Link
            href={item.route}
            key={item.label}
            className={cn('sidebar-link flex items-center w-full p-3 rounded-lg transition-all', { 
                'bg-bank-gradient': isActive 
            })}
          >
            <div className="flex items-center gap-3 w-full">
            <div className="relative size-6 max-md:mx-auto">
                <Image 
                  src={item.imgURL} 
                  alt={item.label} 
                  fill
                  className={cn({ 'brightness-[3] invert-0': isActive })}
                />
              </div>
              <p className={cn("text-base text-gray-700 max-md:hidden", { "!text-white": isActive })}>
                {item.label}
              </p>
            </div>
          </Link>
          );
        })}
         USER
      </nav>
      FOOTER 
    </section>
  )
}

export default Sidebar;