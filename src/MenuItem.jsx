const MenuItem = ({ title, link }) => (
    <div>
        {
            link == null ?
                <div onClick={() => alert("This page is under construction yet")}>{title}</div> :
                <a href={link} target="_blank" onClick={() => console.log({ title })}>{title}</a>
        }
    </div>
);

export default MenuItem;