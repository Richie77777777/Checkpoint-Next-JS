import Image from 'next/image';

const AboutPage = () => (
  <div>
    <h1>About Me</h1>
    <Image src="/profile.jpg" alt="Profile Picture" width={150} height={150} />
  </div>
);

export default AboutPage;
