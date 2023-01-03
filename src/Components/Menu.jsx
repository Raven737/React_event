import pages from '../scripts/constants';
import MenuItem from './MenuItem';

const Menu = () => (
    <div className="wrap">
        {
            pages.map(page => (
                <MenuItem key={page.title} title={page.title} link={page.link} />
            ))
        }
    </div>
);

export default Menu;