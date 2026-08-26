'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  FaCalendarAlt,
  FaCheck,
  FaClock,
  FaCopy,
  FaGraduationCap,
  FaHome,
  FaMapMarkerAlt,
  FaPrint,
  FaShareAlt,
  FaStickyNote,
  FaUtensils,
} from 'react-icons/fa';

const EVENT_START = '2026-08-29T11:00:00+02:00';
const EVENT_DATE = 'Saturday, 29 August 2026';
const EVENT_TIME = '11h00';
const EVENT_VENUE = 'Hoyo Hoyo Chartwell';
const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Hoyo%20Hoyo%20Chartwell';

const ceremonyItems = [
  { title: 'Master of Ceremonies', detail: ['Azola Mzekandaba'] },
  { title: 'Arrival & Registration' },
  {
    title: 'Processional & Arrival of Graduands',
    detail: ['Processional: Gaudeamus Igitur'],
  },
  { title: 'Opening Prayer', detail: ['MC Mdletshe'] },
  { title: 'National Anthem' },
  {
    title: 'Welcome & Opening Remarks',
    detail: [
      'Khathutshelo Tshipate',
      'Chief Operating Officer, CRM Enterprise',
      'Project Manager, Leruo Foundation NPO',
    ],
  },
  { title: 'Keynote Address', detail: ['Pastor Pepsi Tshotetsi'] },
  { title: 'The Graduation Ceremony', emphasis: true },
  { title: 'Congratulatory Address', detail: ['Leruo Matlejoane'] },
  {
    title: "Founder's Address",
    detail: [
      'Connie Matlejoane',
      'Founder & Chairperson, Leruo Foundation NPO',
      'CEO, CRM Enterprise',
    ],
  },
  {
    title: 'Speech & Presentation of Graduands',
    detail: ['Mr Tukisang Senne'],
  },
  {
    title: 'Conferral of Certificates',
    detail: [
      'Presented by Leruo Matlejoane and the 2025 Youthpreneurs Summit Judges',
    ],
  },
  {
    title: 'Hooding Ceremony',
    detail: [
      'Distinguished judges of the 2025 Youthpreneurs Summit and Leruo Matlejoane.',
    ],
  },
  {
    title: 'Outstanding Changemaker Awards',
    detail: ['Connie Matlejoane and Khathu Tshipate'],
  },
  {
    title: 'Closing Remarks & Announcements',
    detail: ['Master of Ceremonies - Azola Mzekandaba'],
  },
  {
    time: '14h00 - 15h00',
    title: 'Break and Official Graduation Photographs',
    emphasis: true,
  },
];

const luncheonItems = [
  {
    title: 'Opening Remarks',
    detail: ['Master of Ceremonies - Azola Mzekandaba'],
  },
  { title: 'Speech & Toast', detail: ['Ms Adelaide Matlejoane'] },
  { title: 'Starters are served', course: true },
  { title: 'Inspirational Address', detail: ['Mr Mpho Kaiser'] },
  { title: 'Video Presentation I' },
  { title: 'Main Course is served', course: true },
  {
    title: 'Changemaker Reflections',
    detail: ['Alinda, Noluthando and Kamogelo'],
  },
  { title: 'Video Presentation II' },
  { title: 'Dessert is served', course: true },
  { title: 'Video Presentation III' },
  {
    title: 'Closing Remarks',
    detail: [
      'Connie Matlejoane',
      'Founder & Chairperson, Leruo Foundation NPO',
      'CEO, CRM Enterprise',
    ],
  },
  { title: 'Closing Prayer', detail: ['MC Mdletshe'] },
];

const menuItems = [
  {
    course: 'Starter',
    items: [
      {
        name: 'Chicken Livers',
        description: [
          'Served in a mild creamy peri-peri sauce,',
          'Served with homemade focaccia bread',
        ],
      },
    ],
  },
  {
    course: 'Main',
    items: [
      {
        name: 'Beef Stew',
        description: ['Served with rice or mash potatoes & garden salad'],
      },
      {
        name: 'Chicken Parmigiana',
        description: [
          'Deboned Chicken',
          'Served with fries & roasted vegetables with a choice of peri, lemon & herb or blueberry barbeque sauce',
        ],
      },
    ],
  },
  {
    course: 'Dessert',
    items: [
      {
        name: 'Peppermint Crisp Tart',
        description: [
          'Tennis biscuit with caramel treat heavy cream with chocolate mint flavor',
        ],
      },
    ],
  },
];

function CountdownUnit({ value, label }) {
  return (
    <div className="min-w-[68px] rounded-xl border border-white/20 bg-white/10 px-3 py-3 text-center backdrop-blur-sm">
      <div className="text-2xl font-bold tabular-nums text-white">{value}</div>
      <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/65">
        {label}
      </div>
    </div>
  );
}

function TimelineItem({ item, index }) {
  return (
    <article className="relative pl-8 sm:pl-10">
      <span
        aria-hidden="true"
        className="absolute left-[7px] top-2 h-3 w-3 rounded-full border-2 border-[#48101f] bg-white"
      />
      <span
        aria-hidden="true"
        className="absolute bottom-[-24px] left-[12px] top-5 w-px bg-[#48101f]/15"
      />
      <div
        className={`rounded-2xl border p-5 sm:p-6 ${
          item.emphasis
            ? 'border-[#48101f]/30 bg-[#48101f]/[0.04]'
            : 'border-gray-200 bg-white'
        }`}
      >
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            {item.time && (
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-[#48101f] px-3 py-1 text-xs font-bold text-white">
                <FaClock aria-hidden="true" />
                {item.time}
              </div>
            )}
            <h3
              className={`text-base font-bold uppercase tracking-wide sm:text-lg ${
                item.emphasis ? 'text-[#48101f]' : 'text-gray-900'
              }`}
            >
              {item.title}
            </h3>
          </div>
          <span className="text-xs font-semibold tabular-nums text-gray-400">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
        {item.detail?.length ? (
          <div className="mt-2 space-y-1 text-sm leading-relaxed text-gray-600 sm:text-base">
            {item.detail.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}

export default function GraduationProgramme() {
  const [now, setNow] = useState(null);
  const [activeTab, setActiveTab] = useState('programme');
  const [copied, setCopied] = useState(false);
  const [note, setNote] = useState('');
  const [noteSaved, setNoteSaved] = useState(false);

  useEffect(() => {
    setNow(new Date());
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem('leruo-graduation-2026:note');
      if (stored) setNote(stored);
    } catch {}
  }, []);

  const countdown = useMemo(() => {
    if (!now) {
      return { complete: false, days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const distance = new Date(EVENT_START).getTime() - now.getTime();
    if (distance <= 0) {
      return { complete: true, days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      complete: false,
      days: Math.floor(distance / 86400000),
      hours: Math.floor((distance / 3600000) % 24),
      minutes: Math.floor((distance / 60000) % 60),
      seconds: Math.floor((distance / 1000) % 60),
    };
  }, [now]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleShare = async () => {
    const url = window.location.href;
    const shareData = {
      title: 'Leruo Foundation Changemakers Graduation Ceremony',
      text: `${EVENT_DATE} • ${EVENT_VENUE} • ${EVENT_TIME}`,
      url,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        return;
      }

      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch (error) {
      if (error?.name !== 'AbortError') {
        setCopied(false);
      }
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  const handleAddToCalendar = () => {
    const stamp = new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z');
    const calendar = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Leruo Foundation//Changemakers Graduation 2026//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VTIMEZONE',
      'TZID:Africa/Johannesburg',
      'BEGIN:STANDARD',
      'TZOFFSETFROM:+0200',
      'TZOFFSETTO:+0200',
      'TZNAME:SAST',
      'DTSTART:19700101T000000',
      'END:STANDARD',
      'END:VTIMEZONE',
      'BEGIN:VEVENT',
      'UID:leruo-changemakers-graduation-20260829@leruofoundation.org',
      `DTSTAMP:${stamp}`,
      'DTSTART;TZID=Africa/Johannesburg:20260829T110000',
      'SUMMARY:Leruo Foundation Changemakers Incubation Programme Graduation Ceremony',
      'DESCRIPTION:Celebrating a Journey of Growth, Purpose & Transformation',
      'LOCATION:Hoyo Hoyo Chartwell',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([calendar], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Leruo-Changemakers-Graduation-2026.ics';
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };

  const saveNote = () => {
    try {
      window.localStorage.setItem('leruo-graduation-2026:note', note);
      setNoteSaved(true);
      window.setTimeout(() => setNoteSaved(false), 2200);
    } catch {
      setNoteSaved(false);
    }
  };

  return (
    <main className="graduation-print-page bg-white text-gray-900">
      <div id="graduation-overview" className="relative overflow-hidden bg-[#48101f] px-5 py-12 text-white sm:px-8 sm:py-16 lg:py-20">
        <div aria-hidden="true" className="absolute -left-20 top-10 h-64 w-64 rounded-full border border-white/10" />
        <div aria-hidden="true" className="absolute -right-24 bottom-0 h-72 w-72 rounded-full border border-white/10" />
        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <img
              src="/images/leruofoundationlogo.svg"
              alt="Leruo Foundation"
              className="mx-auto mb-7 h-20 w-auto brightness-0 invert sm:h-24"
              width="200"
              height="96"
            />
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[#ffc107] sm:text-sm">
              Changemakers Incubation Programme
            </p>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Graduation Ceremony
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              Celebrating a Journey of Growth, Purpose & Transformation
            </p>

            <div className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/20 bg-white/10 px-4 py-4">
                <FaCalendarAlt className="mx-auto mb-2 text-[#ffc107]" aria-hidden="true" />
                <p className="text-sm font-semibold">{EVENT_DATE}</p>
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/20 bg-white/10 px-4 py-4 transition hover:bg-white/15"
              >
                <FaMapMarkerAlt className="mx-auto mb-2 text-[#ffc107]" aria-hidden="true" />
                <p className="text-sm font-semibold">{EVENT_VENUE}</p>
              </a>
              <div className="rounded-2xl border border-white/20 bg-white/10 px-4 py-4">
                <FaClock className="mx-auto mb-2 text-[#ffc107]" aria-hidden="true" />
                <p className="text-sm font-semibold">{EVENT_TIME}</p>
              </div>
            </div>

            <div className="mt-8">
              {countdown.complete ? (
                <div className="inline-flex items-center gap-3 rounded-full border border-[#ffc107]/60 bg-[#ffc107] px-5 py-3 font-bold text-[#48101f]">
                  <FaGraduationCap aria-hidden="true" />
                  Graduation day has arrived
                </div>
              ) : (
                <>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                    Countdown to the ceremony
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 sm:gap-3" aria-live="polite">
                    <CountdownUnit value={countdown.days} label="Days" />
                    <CountdownUnit value={countdown.hours} label="Hours" />
                    <CountdownUnit value={countdown.minutes} label="Minutes" />
                    <CountdownUnit value={countdown.seconds} label="Seconds" />
                  </div>
                </>
              )}
            </div>

            <div className="graduation-no-print mt-8 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={handleAddToCalendar}
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#ffc107] px-5 py-3 text-sm font-bold text-[#48101f] transition hover:bg-[#e0a800]"
              >
                <FaCalendarAlt aria-hidden="true" />
                Add to Calendar
              </button>
              <button
                type="button"
                onClick={handleShare}
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/15"
              >
                <FaShareAlt aria-hidden="true" />
                Share Programme
              </button>
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/15"
              >
                <FaPrint aria-hidden="true" />
                Print / Save PDF
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="graduation-no-print sticky top-0 z-30 border-b border-gray-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 overflow-x-auto px-4 py-3 sm:px-6">
          <div className="flex min-w-max gap-2">
            <button
              type="button"
              onClick={() => {
                setActiveTab('programme');
                window.setTimeout(() => scrollTo('graduation-programme'), 0);
              }}
              className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                activeTab === 'programme'
                  ? 'bg-[#48101f] text-white'
                  : 'bg-gray-100 text-[#48101f] hover:bg-gray-200'
              }`}
            >
              Programme
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveTab('menu');
                window.setTimeout(() => scrollTo('graduation-menu'), 0);
              }}
              className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                activeTab === 'menu'
                  ? 'bg-[#48101f] text-white'
                  : 'bg-gray-100 text-[#48101f] hover:bg-gray-200'
              }`}
            >
              Menu
            </button>
          </div>
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex min-w-max items-center gap-2 text-sm font-semibold text-[#48101f]"
          >
            {copied ? <FaCheck aria-hidden="true" /> : <FaCopy aria-hidden="true" />}
            {copied ? 'Link copied' : 'Copy link'}
          </button>
        </div>
      </div>

      <section id="graduation-programme" className="scroll-mt-20 bg-white px-5 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#48101f]/55">
              Official Programme
            </p>
            <h2 className="mt-2 text-3xl font-bold text-[#48101f] sm:text-4xl">
              Graduation Ceremony
            </h2>
          </div>

          <div className="space-y-6">
            {ceremonyItems.map((item, index) => (
              <TimelineItem key={`${item.title}-${index}`} item={item} index={index} />
            ))}
          </div>

          <div className="my-12 rounded-3xl bg-[#48101f] px-6 py-8 text-center text-white sm:px-10">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#ffc107]">
              15h00
            </p>
            <h2 className="mt-2 text-3xl font-bold">Three-Course Luncheon</h2>
          </div>

          <div className="space-y-6">
            {luncheonItems.map((item, index) => (
              <TimelineItem
                key={`${item.title}-luncheon-${index}`}
                item={item}
                index={ceremonyItems.length + index}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="graduation-menu" className="scroll-mt-20 bg-[#f8f5f3] px-5 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 text-center">
            <FaUtensils className="mx-auto mb-3 text-2xl text-[#48101f]" aria-hidden="true" />
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#48101f]/55">
              Three-Course Luncheon
            </p>
            <h2 className="mt-2 text-3xl font-bold text-[#48101f] sm:text-4xl">Menu</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {menuItems.map((course) => (
              <article
                key={course.course}
                className="rounded-3xl border border-[#48101f]/10 bg-white p-6 sm:p-7"
              >
                <div className="mb-5 border-b border-[#48101f]/10 pb-4 text-center">
                  <h3 className="text-xs font-bold uppercase tracking-[0.28em] text-[#48101f]">
                    {course.course}
                  </h3>
                </div>
                <div className="space-y-7">
                  {course.items.map((item) => (
                    <div key={item.name} className="text-center">
                      <h4 className="text-lg font-bold uppercase text-gray-900">{item.name}</h4>
                      <div className="mt-2 space-y-1 text-sm leading-relaxed text-gray-600">
                        {item.description.map((line) => (
                          <p key={line}>{line}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl border border-[#48101f]/15 bg-[#48101f]/[0.035] px-6 py-8 text-center sm:px-10">
            <FaGraduationCap className="mx-auto mb-4 text-3xl text-[#48101f]" aria-hidden="true" />
            <h2 className="text-2xl font-bold text-[#48101f] sm:text-3xl">
              Congratulations, Class of 2026
            </h2>
            <div className="mx-auto mt-4 max-w-2xl space-y-1 text-base leading-relaxed text-gray-700">
              <p>You entered as entrepreneurs with potential.</p>
              <p>You leave as Changemakers with purpose.</p>
              <p>May you build boldly.</p>
              <p>May you lead with integrity.</p>
              <p>May your businesses create opportunity.</p>
              <p>May your success become a source of impact for others.</p>
            </div>
            <p className="mt-7 text-sm font-bold uppercase tracking-[0.18em] text-[#48101f]">
              Leruo Foundation NPO
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Empowering Youthpreneurs. Building Businesses. Transforming Communities.
            </p>
          </div>
        </div>
      </section>

      <section id="graduation-note" className="graduation-no-print bg-[#f8f5f3] px-5 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8">
            <div className="mb-5 flex items-start gap-3">
              <div className="rounded-full bg-[#48101f]/10 p-3 text-[#48101f]">
                <FaStickyNote aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#48101f]">My Graduation Note</h2>
                <p className="mt-1 text-sm text-gray-600">
                  A private note saved only on this device.
                </p>
              </div>
            </div>
            <label htmlFor="graduation-note-input" className="sr-only">
              My graduation note
            </label>
            <textarea
              id="graduation-note-input"
              rows={5}
              value={note}
              onChange={(event) => setNote(event.target.value)}
              placeholder="Write one thing you want to remember from today..."
              className="w-full resize-y rounded-2xl border border-gray-300 px-4 py-3 text-sm leading-relaxed outline-none transition focus:border-[#48101f] focus:ring-2 focus:ring-[#48101f]/10"
            />
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs text-gray-500">Nothing is sent to a server.</p>
              <button
                type="button"
                onClick={saveNote}
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#48101f] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#5c1c2d]"
              >
                {noteSaved ? <FaCheck aria-hidden="true" /> : <FaStickyNote aria-hidden="true" />}
                {noteSaved ? 'Saved' : 'Save Note'}
              </button>
            </div>
          </div>
        </div>
      </section>

      <nav
        aria-label="Graduation programme quick navigation"
        className="graduation-no-print fixed inset-x-3 bottom-3 z-40 mx-auto max-w-md rounded-2xl border border-[#48101f]/15 bg-white/95 p-2 shadow-lg backdrop-blur md:hidden"
      >
        <div className="grid grid-cols-4 gap-1">
          {[
            { id: 'graduation-overview', label: 'Home', icon: FaHome },
            { id: 'graduation-programme', label: 'Programme', icon: FaGraduationCap },
            { id: 'graduation-menu', label: 'Menu', icon: FaUtensils },
            { id: 'share', label: 'Share', icon: FaShareAlt },
          ].map((item) => {
            const Icon = item.icon;
            const isShare = item.id === 'share';
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => (isShare ? handleShare() : scrollTo(item.id))}
                className="flex min-h-12 flex-col items-center justify-center rounded-xl px-1 py-2 text-[10px] font-bold uppercase tracking-wide text-[#48101f] transition hover:bg-[#48101f]/5"
              >
                <Icon className="mb-1 text-sm" aria-hidden="true" />
                {item.label}
              </button>
            );
          })}
        </div>
      </nav>

      <div className="h-20 md:hidden graduation-no-print" aria-hidden="true" />

      <style jsx global>{`
        @media print {
          .graduation-no-print {
            display: none !important;
          }

          .graduation-print-page {
            background: #ffffff !important;
            color: #111827 !important;
          }

          .graduation-print-page section,
          .graduation-print-page > div {
            break-inside: avoid;
          }

          .graduation-print-page article {
            break-inside: avoid;
          }
        }
      `}</style>
    </main>
  );
}
