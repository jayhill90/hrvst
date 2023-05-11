import trackstack from '../public/trackstacklabels.json';
import Link from 'next/link';

const labels = trackstack.data.searchInboxes.map( label => {
    const slug = label.slug
    return (
        slug
    );
});

export default function Trackstack() {
    return (
        <>
            <div>
            {labels.map( label => (
                <div key={label} className="grid-flow-column grid">
                    <Link key={label} className="text-black" href={`https://tstack.app/${label}`}>{label}</Link>      
                    </div>
            ))}
        </div>
        </>

    )
}