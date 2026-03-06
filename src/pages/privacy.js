export default function PrivacyRedirect() {
  return null;
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/bankingdetails',
      permanent: false,
    },
  };
}
