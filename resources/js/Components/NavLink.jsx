import { Link } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center px-1 pt-1 text-lg font-bold leading-5 transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? ' text-orange-600 font-bold text-lg'
                    : 'border-transparent hover:text-orange-600 focus:border-orange-600 text-white ') +
                className
            }
        >
            {children}
        </Link>
    );
}
