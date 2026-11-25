import { useEffect, useState } from 'react';
import {
  ExternalLink,
  Layers,
  X,
  ChevronLeft,
  ChevronRight,
  Images,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { supabase } from '../lib/supabase';

type CategoryKey = 'all' | 'websites' | 'apps' | 'ecom' | 'booking';

interface ProjectRow {
  id: string;
  category_key: Exclude<CategoryKey, 'all'>;
  badge_en: string;
  badge_lv: string;
  badge_ru: string;
  title_en: string;
  title_lv: string;
  title_ru: string;
  desc_en: string;
  desc_lv: string;
  desc_ru: string;
  tags: string[];
  image_url: string | null;
  images: string[] | null;
  live_url: string | null;
}

const categoryKeys: CategoryKey[] = ['all', 'apps', 'ecom', 'booking'];

export default function Portfolio() {
  const { t, i18n } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('all');
  const [projects, setProjects] = useState<ProjectRow[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedProject, setSelectedProject] = useState<ProjectRow | null>(null);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data } = await supabase
        .from('projects')
        .select('*')
        .eq('is_visible', true)
        .order('sort_order', { ascending: true });

      if (data) setProjects(data);
      setLoading(false);
    };

    fetchProjects();
  }, []);

  const lang = (i18n.language?.slice(0, 2) || 'en') as 'en' | 'lv' | 'ru';

  const getLocalized = (project: ProjectRow, field: 'badge' | 'title' | 'desc') => {
    return project[`${field}_${lang}`] || project[`${field}_en`];
  };

  const getProjectImages = (project: ProjectRow): string[] => {
    if (project.images && project.images.length > 0) return project.images;
    if (project.image_url) return [project.image_url];
    return [];
  };

  const openModal = (project: ProjectRow) => {
    setSelectedProject(project);
    setActiveImageIdx(0);
  };

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category_key === activeCategory);

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

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((n) => (
              <div key={n} className="h-96 rounded-2xl bg-slate-100 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => {
              const title = getLocalized(project, 'title');
              const badge = getLocalized(project, 'badge');
              const desc = getLocalized(project, 'desc');
              const imgs = getProjectImages(project);

              return (
                <div
                  key={project.id}
                  onClick={() => openModal(project)}
                  className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#1D56C9]/30 transition-all flex flex-col cursor-pointer"
                >
                  {imgs.length > 0 ? (
                    <div className="relative h-60 overflow-hidden bg-slate-900">
                      <img
                        src={imgs[0]}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-4 left-4 text-xs font-medium bg-[#0B2545]/90 backdrop-blur-xs text-white px-3 py-1 rounded-full">
                        {badge}
                      </span>
                      {imgs.length > 1 && (
                        <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 text-xs font-medium bg-slate-900/80 backdrop-blur-xs text-white px-2.5 py-1 rounded-md">
                          <Images className="w-3.5 h-3.5" />
                          {imgs.length}
                        </span>
                      )}
                    </div>
                  ) : (
                    <div className="h-60 bg-linear-to-br from-[#0B2545] via-[#13386B] to-[#1D56C9] p-6 flex flex-col justify-between text-white">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium bg-white/15 backdrop-blur-xs px-3 py-1 rounded-full">
                          {badge}
                        </span>
                        <Layers className="w-5 h-5 text-blue-200" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-blue-200 mb-1">
                          {t(`portfolio.cats.${project.category_key}`)}
                        </p>
                        <h3 className="text-xl font-bold">{title}</h3>
                      </div>
                    </div>
                  )}

                  <div className="p-6 sm:p-8 grow flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h2 className="text-xl font-bold text-[#0B2545] group-hover:text-[#1D56C9] transition-colors">
                          {title}
                        </h2>
                        {project.live_url && (
                          <a
                            href={project.live_url}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-slate-400 hover:text-[#1D56C9] transition-colors shrink-0"
                            aria-label={`Open ${title}`}
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed mb-6 line-clamp-3">
                        {desc}
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
                      <span className="text-xs font-semibold text-[#1D56C9]">
                        {t('portfolio.buildSimilar')}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Project Details & Multi-Image Gallery Modal */}
      {selectedProject && (() => {
        const modalImgs = getProjectImages(selectedProject);
        const modalTitle = getLocalized(selectedProject, 'title');
        const modalBadge = getLocalized(selectedProject, 'badge');
        const modalDesc = getLocalized(selectedProject, 'desc');

        const prevImg = () =>
          setActiveImageIdx((prev) => (prev === 0 ? modalImgs.length - 1 : prev - 1));
        const nextImg = () =>
          setActiveImageIdx((prev) => (prev === modalImgs.length - 1 ? 0 : prev + 1));

        return (
          <div
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 bg-slate-900/75 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-200 my-8"
            >
              {/* Modal Top Image Gallery */}
              {modalImgs.length > 0 ? (
                <div className="relative bg-slate-950">
                  <div className="aspect-video w-full overflow-hidden flex items-center justify-center">
                    <img
                      src={modalImgs[activeImageIdx]}
                      alt={`${modalTitle} - ${activeImageIdx + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Close Button */}
                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/80 text-white hover:bg-slate-800 flex items-center justify-center cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  {/* Prev / Next Arrows */}
                  {modalImgs.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={prevImg}
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[#0B2545] shadow-md flex items-center justify-center cursor-pointer"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        type="button"
                        onClick={nextImg}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[#0B2545] shadow-md flex items-center justify-center cursor-pointer"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}

                  {/* Thumbnails Strip */}
                  {modalImgs.length > 1 && (
                    <div className="flex items-center justify-center gap-2 p-3 bg-slate-900">
                      {modalImgs.map((imgUrl, idx) => (
                        <button
                          key={imgUrl + idx}
                          type="button"
                          onClick={() => setActiveImageIdx(idx)}
                          className={`h-12 w-20 rounded-md overflow-hidden border-2 transition-all cursor-pointer ${
                            activeImageIdx === idx
                              ? 'border-[#1D56C9] opacity-100 scale-105'
                              : 'border-transparent opacity-50 hover:opacity-80'
                          }`}
                        >
                          <img src={imgUrl} alt="" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="relative bg-linear-to-r from-[#0B2545] to-[#1D56C9] p-8 text-white">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <span className="text-xs font-medium bg-white/15 px-3 py-1 rounded-full">
                    {modalBadge}
                  </span>
                  <h2 className="text-2xl font-bold mt-3">{modalTitle}</h2>
                </div>
              )}

              {/* Modal Content */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  {modalImgs.length > 0 && (
                    <span className="inline-block text-xs font-semibold text-[#1D56C9] bg-blue-50 px-3 py-1 rounded-full mb-2">
                      {modalBadge}
                    </span>
                  )}
                  <h2 className="text-2xl font-bold text-[#0B2545]">{modalTitle}</h2>
                  <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                    {modalDesc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium bg-slate-100 text-slate-700 px-3 py-1.5 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                  {selectedProject.live_url ? (
                    <a
                      href={selectedProject.live_url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-[#1D56C9]"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Open Live Preview
                    </a>
                  ) : (
                    <span />
                  )}

                  <Link
                    to="/contact"
                    onClick={() => setSelectedProject(null)}
                    className="inline-flex items-center gap-2 bg-[#0B2545] hover:bg-[#163863] text-white text-sm font-medium px-6 py-3 rounded-lg transition-colors"
                  >
                    {t('nav.quote')}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
}