import icons from '../constants/icons';

export const generateIconClass = (id) => {
    const icon = icons[id] || 'default';

    const classes = `item__genre-icon item__genre-icon--${icon}`;

    return classes;
};
