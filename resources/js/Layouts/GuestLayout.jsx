import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import GuestNavigation from './GuestNavigation';

export default function Guest({ children }) {
    return (
        <div className="container mx-auto">
            <div>
                <GuestNavigation />
            </div>
            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
