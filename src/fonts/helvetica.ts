import localFont from 'next/font/local';

const helvetica = localFont({
  src: [
    {
      path: '../../public/fonts/helvetica/Helvetica-light.ttf',
      weight: '300',
      style: 'light',
    },
    {
      path: '../../public/fonts/helvetica/Helvetica.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/helvetica/Helvetica-Bold.ttf',
      weight: '700',
      style: 'bold',
    },
  ],
});

export default helvetica;
