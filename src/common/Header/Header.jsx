import './Header.scss';
import { IconSearch } from '@tabler/icons-react';
import Logo from '../../assets/images/logo.png';
import '../../i18n';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import CategoryItem from './Category';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import MenuUser from '../../components/User/MenuUser';

const Header = () => {
    const { t } = useTranslation('header');
    const navigate = useNavigate();
    const favoriteItems = useSelector((state) => state.courses.favorites);
    const [isHovered, setIsHovered] = useState(false);
    const handleClickSignIn = () => navigate('/signIn');
    const handleClickSignUp = () => navigate('/signUp');
    const handleLogoClick = () => navigate('/');
    const handleClickCart = () => navigate('/cart');

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={Logo} alt="Logo" className="logo" onClick={handleLogoClick} />
            </div>
            <CategoryItem />

            <div className="navbar-search">
                <button className="search-button">
                    <IconSearch stroke={2} />
                </button>
                <input type="text" placeholder={t('header1')} className="search-input" />
            </div>

            <div
                className="favoriteIcon"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <FavoriteBorderIcon />
                {isHovered && (
                    <div className="favorite-menu">
                        <div className="favorite-items">
                            {favoriteItems.length > 0 ? (
                                favoriteItems.map((item) => (
                                    <div key={item.id}>
                                        <div className="favorite-item">
                                            <img src={item.thumbnail} alt={item.name} className="favorite-thumbnail" />
                                            <div className="favorite-item-details">
                                                <span className="favorite-item-name">{item.name}</span>
                                                <span className='favorite-item-author'>{item.author}</span>
                                                <span className="favorite-item-price">{item.price} đ</span>
                                            </div>
                                        </div>
                                        <button className="view-cart-button" onClick={handleClickCart}>
                                            {t('Add to cart')}
                                        </button>
                                        <hr className='hr'></hr>
                                    </div>
                                ))
                            ) : (
                                <div className="empty-favorites">{t('No favorite items')}</div>
                            )}
                        </div>
                    </div>
                )}
            </div>

            <div className="cartIcon" onClick={handleClickCart}>
                <ShoppingCartSharpIcon />
            </div>

            <div className="navbar-buttons">
                <button className="login-button" onClick={handleClickSignIn}>{t('header2')}</button>
                <button className="signup-button" onClick={handleClickSignUp}>{t('header3')}</button>
            </div>
            <MenuUser />
        </nav>
    );
};

export default Header;
