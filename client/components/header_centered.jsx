/* This example requires Tailwind CSS v2.0+ */
import { XIcon } from '@heroicons/react/outline'

export default function HeaderBanner() {
  return (
    <div className="relative bg-orange">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="pr-16 sm:text-center sm:px-16">
          <p className="font-medium text-white">
            <span className="md:hidden">Stay up to date:</span>
            <span className="hidden md:inline">Want to stay up-to-date with Vorsin Tools?</span>
            <span className="block sm:ml-2 sm:inline-block">
              <a href="https://discord.gg/nNS2XJzytw" className="text-white font-bold underline">
                {' '}
                Join our Discord <span aria-hidden="true">&rarr;</span>
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
