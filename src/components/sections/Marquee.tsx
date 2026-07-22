const marqueeItems = [
    'UX Design',
    'App Design',
    'Branding',
    'UX Research',
    'Web Development',
    'Cloud Systems',
    'Software Architecture',
    'IoT Systems',
    'Automation'
];

export const Marquee = () => {
    return (
        <div className="overflow-hidden py-4 flex select-none border-t border-b border-violet-700/20 relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-violet-600">
            <div className="flex w-max animate-marquee-scroll">
                {/* Loop twice for perfect wrap around scrolling */}
                {[...Array(2)].map((_, groupIndex) => (
                    <div key={groupIndex} className="flex items-center gap-12 pr-12">
                        {marqueeItems.map((item, itemIndex) => (
                            <div key={itemIndex} className="font-heading text-lg sm:text-2xl font-bold text-black uppercase whitespace-nowrap flex items-center gap-12">
                                <span>{item}</span>
                                <span className="text-white/70">✦</span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};
