const MenuItem = ({ title, link }) => (
    <div>
        {
            link != "" ? <a href={link} target="_blank" onClick={() => console.log({ title })}>{title}</a> : <div>{() => alert("This page is under construction yet")}</div>
        }

    </div>
);

export default MenuItem;