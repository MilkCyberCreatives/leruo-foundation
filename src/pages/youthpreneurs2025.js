export default function Youthpreneurs2025Redirect() {
  return null;
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/youthpreneurs',
      permanent: true,
    },
  };
}
