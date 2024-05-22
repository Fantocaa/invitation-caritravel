import { Head, usePage } from "@inertiajs/react";

export default function Invitation() {
    const { inviteUser } = usePage().props;

    return (
        <>
            <Head title="Invitation" />
            <div>
                <h1>Invitation for {inviteUser.name}</h1>
            </div>
        </>
    );
}
