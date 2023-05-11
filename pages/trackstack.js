import trackstack from '../public/trackstacklabels.json';
import Link from 'next/link';

const labels = trackstack.data.searchInboxes.map( label => {
    return ({
        slug: label.slug,
        name: label.name
    }
    );
});

export default function Trackstack() {
    return (
        <>
            <div>
            {labels.map( label => (
                <div key={label} className="grid-flow-column grid">
                    <Link key={label} className="text-black" href={`https://tstack.app/${label.slug}`}>{label.name}</Link>      
                    </div>
            ))}
        </div>
        </>

    )
}