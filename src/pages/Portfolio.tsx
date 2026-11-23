import { useState } from 'react';
import { ExternalLink, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

type CategoryKey = 'all' | 'websites' | 'apps' | 'ecom' | 'booking';

interface Project {
  id: string;
  title: string;
  categoryKey: Exclude<CategoryKey, 'all'>;
  badge: string;
  description: string;
  tags: string[];
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: 'restaurant-saas',
    title: 'Restaurant Ordering System (SaaS)',
    categoryKey: 'apps',
    badge: 'Live Production System',
    description:
      'Multi-tenant restaurant platform featuring QR table ordering, real-time Kitchen Display System (KDS), live order status tracking, and custom tenant branding.',
    tags: ['React', 'TypeScript', 'Multi-Tenant SaaS', 'KDS'],
    liveUrl: '#',
  },
  {
    id: 'barber-booking',
    title: 'Barbershop & Salon Booking Platform',
    categoryKey: 'booking',
    badge: 'Live Web App',
    description:
      'Multi-language (EN / LV / RU) appointment booking system with service selection, time-slot scheduling, and an integrated business analytics dashboard.',
    tags: ['React', 'Tailwind CSS', 'Multi-Language', 'Analytics'],
    liveUrl: '#',
  },
  {
    id: 'qr-pager-concept',
    title: 'Smart QR + Pager Queue Solution',
    categoryKey: 'apps',
    badge: 'Proposed Industry Concept',
    description:
      'Digital queue and table-notification concept designed for fast-casual restaurants to replace expensive hardware pagers with instant mobile alerts.',
    tags: ['Concept Architecture', 'QR Workflow', 'Real-Time Alerts'],
  },
  {
    id: 'gadgets-eshop',
    title: 'Modern Electronics Online Store',
    categoryKey: 'ecom',
    badge: 'E-commerce Build',
    description:
      'Responsive multi-language product catalog with category filtering, shopping cart management, and streamlined checkout flow.',
    tags: ['E-commerce', 'Multi-Language', 'Responsive UI'],
    liveUrl: '#',
  },
];

const categoryKeys: CategoryKey[] = ['all', 'websites', 'apps', 'ecom', 'booking'];

export default function Portfolio() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('all');

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.categoryKey === activeCategory);

  return (
    <div className="bg-linear-to-b from-[#F4F7FC] via-white to-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <span className="text-sm font-semibold text-[#1D56C9]">
            {t('portfolio.tag')}
          </span>
          <h1 className="mt-2 text-4xl font-extrabold text-[#0B2545] tracking-tight">
            {t('portfolio.title')}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {t('portfolio.subtitle')}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-12">
          {categoryKeys.map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setActiveCategory(key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                activeCategory === key
                  ? 'bg-[#0B2545] text-white'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-[#0B2545]'
              }`}
            >
              {t(`portfolio.cats.${key}`)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col"
            >
              <div className="h-56 bg-linear-to-br from-[#0B2545] via-[#13386B] to-[#1D56C9] p-6 flex flex-col justify-between text-white">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium bg-white/15 backdrop-blur-xs px-3 py-1 rounded-full">
                    {project.badge}
                  </span>
                  <Layers className="w-5 h-5 text-blue-200" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-blue-200 mb-1">
                    {t(`portfolio.cats.${project.categoryKey}`)}
                  </p>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
              </div>

              <div className="p-6 sm:p-8 grow flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h2 className="text-xl font-bold text-[#0B2545]">
                      {project.title}
                    </h2>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-400 hover:text-[#1D56C9] transition-colors shrink-0"
                        aria-label={`Open ${project.title}`}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className="text-xs font-semibold text-[#1D56C9] hover:text-[#0B2545]"
                  >
                    {t('portfolio.buildSimilar')}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}