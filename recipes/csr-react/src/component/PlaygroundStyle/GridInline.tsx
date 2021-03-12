const GridInline = () => (
    <div
        style={{
            display: 'grid',
            gap: '10px',
            gridTemplateColumns: 'repeat(2, 1fr)',
        }}
    >
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
    </div>
);

export default GridInline;
