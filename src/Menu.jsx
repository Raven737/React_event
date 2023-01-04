import pages from './constants';
import MenuItem from './MenuItem';

const Menu = () => (
    <div className="wrap">
        {
            pages.map(page => (
                <MenuItem title={page.title} link={page.link} />
            ))
        }
    </div>
);

export default Menu;