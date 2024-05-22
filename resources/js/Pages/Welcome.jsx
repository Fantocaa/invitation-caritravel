import { Link, Head, usePage } from "@inertiajs/react";

export default function Welcome() {
    const { inviteUsers } = usePage().props;

    return (
        <>
            <Head title="Welcome" />
            <section>
                {inviteUsers.map((inviteUser) => (
                    <div key={inviteUser.id}>
                        <p>{inviteUser.name}</p>
                        <Link href={`/${inviteUser.invitation_link}`}>
                            Invitation Link
                        </Link>
                    </div>
                ))}
            </section>
        </>
    );
}
