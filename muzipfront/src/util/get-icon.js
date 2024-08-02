import headPhone from '../assets/headPhone.svg';
import band from '../assets/band.svg';
import community from '../assets/community.svg';
import home from '../assets/home.svg';
import sheet from '../assets/sheet.svg';
import alarm from '../assets/alarm.svg';
import profile from '../assets/profile.svg';

export function getIconImage(IconName) {
  switch (IconName) {
    case 'band':
      return band;
    case 'headPhone':
      return headPhone;
    case 'community':
      return community;
    case 'home':
      return home;
    case 'sheet':
      return sheet;
    case 'alarm':
      return alarm;
    case 'profile':
      return profile;
    default:
      return null;
  }
}
