import TopBar from '@/components/TopBar';
import MainHeader from '@/components/MainHeader';
import FooterSection from '@/components/FooterSection';
import GraduationProgramme from '@/components/GraduationProgramme';

export default function GraduationProgrammePage() {
  return (
    <>
      <div className="graduation-no-print">
        <TopBar />
        <MainHeader />
      </div>

      <GraduationProgramme />

      <div className="graduation-no-print">
        <FooterSection />
      </div>
    </>
  );
}
