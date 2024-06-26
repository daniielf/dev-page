
import Image from 'next/image';
import styles from './styles.module.css';
import { FooterIcon } from '../FooterIcon/FooterIcon';
import { URLS } from '@/constants';

export const Footer = () => {
  return (
  <div className={styles.container}>
    <FooterIcon src="/assets/github.png" url={URLS.GITHUB} alt='Github url'/>
    <FooterIcon src="/assets/linkedin.png" url={URLS.LINKEDIN} alt='LinkedIn url'/>
    <FooterIcon src="/assets/medium.png" url={URLS.MEDIUM} alt='Medium url'/>
  </div>)
}