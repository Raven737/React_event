const MenuItem = ({ title, link }) => (
    <div>
        <a href={link} target="_blank" onClick={console.log({ title })}>{title}</a>
    </div>
);

export default MenuItem;