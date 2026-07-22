import { Service, Project, ProcessStep, Stat } from '../types';

export const services: Service[] = [
  {
    id: '1',
    slug: 'fuel-station-construction',
    icon: 'Fuel',
    title: { ar: 'إنشاء محطات الوقود', en: 'Fuel Station Construction' },
    description: { ar: 'تنفيذ شامل لبناء محطات الوقود بأحدث المعايير الهندسية وأنظمة السلامة العالمية.', en: 'Comprehensive construction of fuel stations using the latest engineering standards and global safety systems.' }
  },
  {
    id: '2',
    slug: 'station-development',
    icon: 'RefreshCw',
    title: { ar: 'تطوير وإعادة تأهيل المحطات', en: 'Development & Rehabilitation' },
    description: { ar: 'تحديث المحطات القائمة لرفع كفاءتها وتحسين مظهرها لتتوافق مع الهويات الجديدة للمشغلين.', en: 'Upgrading existing stations to improve efficiency and align their appearance with operators\' new branding.' }
  },
  {
    id: '3',
    slug: 'civil-works',
    icon: 'HardHat',
    title: { ar: 'الأعمال المدنية والإنشائية', en: 'Civil & Structural Works' },
    description: { ar: 'بناء الهياكل الخرسانية والمعدنية والأساسات بأعلى درجات المتانة.', en: 'Building concrete and steel structures and foundations with the highest durability.' }
  },
  {
    id: '4',
    slug: 'architectural-finishes',
    icon: 'Paintbrush',
    title: { ar: 'التشطيبات المعمارية', en: 'Architectural Finishes' },
    description: { ar: 'تنفيذ الواجهات والتشطيبات الداخلية والخارجية التي تعكس الهوية البصرية للمشروع.', en: 'Executing facades, interior, and exterior finishes that reflect the project\'s visual identity.' }
  },
  {
    id: '5',
    slug: 'mep-works',
    icon: 'Zap',
    title: { ar: 'الأعمال الكهربائية والميكانيكية', en: 'MEP Works' },
    description: { ar: 'تركيب الأنظمة الكهربائية والميكانيكية المتكاملة وأنظمة التهوية والتكييف.', en: 'Installation of integrated mechanical and electrical systems, ventilation, and AC systems.' }
  },
  {
    id: '6',
    slug: 'fuel-systems',
    icon: 'Droplet',
    title: { ar: 'أنظمة ضخ وتخزين الوقود', en: 'Fuel Pumping & Storage' },
    description: { ar: 'تجهيز المحطات بأنظمة ضخ الوقود وتركيب خزانات وقود آمنة حسب الاشتراطات.', en: 'Equipping stations with fuel pumping systems and installing safe fuel tanks according to regulations.' }
  },
  {
    id: '7',
    slug: 'safety-systems',
    icon: 'ShieldCheck',
    title: { ar: 'أنظمة الأمان المتطورة', en: 'Advanced Safety Systems' },
    description: { ar: 'توفير وتركيب أحدث أنظمة الأمان والإنذار ومكافحة الحريق لضمان سلامة الأرواح والممتلكات.', en: 'Providing and installing the latest safety, alarm, and fire-fighting systems to ensure safety.' }
  }
];

export const processSteps: ProcessStep[] = [
  { id: 1, title: { ar: 'التخطيط والتصميم', en: 'Planning & Design' }, description: { ar: 'نقوم بدراسة الموقع وإعداد المخططات الهندسية الشاملة للمشروع بما يتوافق مع الأنظمة.', en: 'We study the site and prepare comprehensive engineering layouts complying with regulations.' } },
  { id: 2, title: { ar: 'التجهيز والأعمال الأولية', en: 'Preparation & Preliminary Works' }, description: { ar: 'تجهيز الموقع وحفر الخزانات والأساسات وتمديد شبكات الصرف.', en: 'Site preparation, tank and foundation excavation, and drainage network extension.' } },
  { id: 3, title: { ar: 'التنفيذ الإنشائي', en: 'Structural Execution' }, description: { ar: 'بناء الهياكل المعدنية والخرسانية والمباني المرفقة بالمحطة.', en: 'Constructing steel and concrete structures and attached buildings.' } },
  { id: 4, title: { ar: 'الأعمال الكهربائية والميكانيكية', en: 'MEP Works' }, description: { ar: 'تركيب أنظمة الضخ وتمديد الكابلات وتجهيز أنظمة السلامة والإنذار.', en: 'Installing pumping systems, laying cables, and equipping safety and alarm systems.' } },
  { id: 5, title: { ar: 'التشطيبات والهوية', en: 'Finishes & Branding' }, description: { ar: 'إكساء الواجهات وتركيب المظلات وإبراز الهوية البصرية للعلامة التجارية.', en: 'Facade cladding, canopy installation, and highlighting the brand identity.' } },
  { id: 6, title: { ar: 'الفحص وضبط الجودة', en: 'Inspection & Quality Control' }, description: { ar: 'إجراء اختبارات شاملة لجميع الأنظمة للتأكد من مطابقتها لأعلى معايير الجودة والأمان.', en: 'Conducting comprehensive tests for all systems to ensure compliance with quality and safety standards.' } },
  { id: 7, title: { ar: 'التسليم والتشغيل', en: 'Handover & Operation' }, description: { ar: 'تسليم المشروع جاهزاً للتشغيل مع توفير كافة الضمانات وشهادات الاعتماد.', en: 'Handing over the project ready for operation with all warranties and certification documents.' } },
];

export const stats: Stat[] = [
  { id: '1', label: { ar: 'مشاريع متنوعة', en: 'Diverse Projects' } },
  { id: '2', label: { ar: 'تنفيذ متكامل', en: 'Integrated Execution' } },
  { id: '3', label: { ar: 'خبرة متخصصة', en: 'Specialized Experience' } },
  { id: '4', label: { ar: 'جودة عالية', en: 'High Quality' } },
];

export const projects: Project[] = [
  {
    id: '1',
    slug: 'joil-jumum',
    status: 'completed',
    title: { ar: 'محطة جي أويل - الجموم', en: 'J-OIL Station - Al Jumum' },
    type: { ar: 'إنشاء جديد', en: 'New Construction' },
    location: { ar: 'الرياض', en: 'Riyadh' },
    categoryId: 'construction',
    image: '/assets/project-jumum-1.jpg',
    gallery: ['/assets/project-jumum-2.jpg'],
    shortDescription: {
      ar: 'إنشاء محطة وقود متكاملة لصالح العلامة التجارية جي أويل عام 2023م.',
      en: 'Construction of a complete fuel station for J-OIL brand in 2023.',
    },
  },
  {
    id: '2',
    slug: 'joil-waha',
    status: 'completed',
    title: { ar: 'محطة جي أويل - الواحة', en: 'J-OIL Station - Al Waha' },
    type: { ar: 'إنشاء جديد', en: 'New Construction' },
    location: { ar: 'الرياض', en: 'Riyadh' },
    categoryId: 'construction',
    image: '/assets/project-waha-1.jpg',
    gallery: ['/assets/project-waha-2.jpg', '/assets/project-waha-3.jpg'],
    shortDescription: {
      ar: 'إنشاء محطة وقود حديثة لصالح جي أويل في حي الواحة بالرياض.',
      en: 'Construction of a modern fuel station for J-OIL in Al Waha district, Riyadh.',
    },
  },
  {
    id: '3',
    slug: 'joil-class-takhassusi',
    status: 'completed',
    title: { ar: 'محطة جي أويل - كلاس التخصصي', en: 'J-OIL Station - Class Takhassusi' },
    type: { ar: 'إنشاء جديد', en: 'New Construction' },
    location: { ar: 'الرياض', en: 'Riyadh' },
    categoryId: 'construction',
    image: '/assets/project-class-1.jpg',
    gallery: ['/assets/project-class-2.jpg'],
    shortDescription: {
      ar: 'تنفيذ أعمال الإنشاء لمحطة جي أويل فئة كلاس التخصصي.',
      en: 'Construction works for J-OIL Class Takhassusi station.',
    },
  },
  {
    id: '4',
    slug: 'go-mahdiyah',
    status: 'completed',
    title: { ar: 'جو استيشن - المهدية', en: 'GO Station - Al Mahdiyah' },
    type: { ar: 'إنشاء جديد', en: 'New Construction' },
    location: { ar: 'الرياض', en: 'Riyadh' },
    categoryId: 'construction',
    image: '/assets/project-mahdiyah-1.jpg',
    gallery: ['/assets/project-mahdiyah-2.jpg'],
    shortDescription: {
      ar: 'تنفيذ شامل لمحطة جو استيشن في المهدية، متضمنة كافة المرافق.',
      en: 'Comprehensive execution of GO Station in Al Mahdiyah, including all facilities.',
    },
  },
  {
    id: '5',
    slug: 'joil-nahda',
    status: 'completed',
    title: { ar: 'محطة جي أويل - النهضة', en: 'J-OIL Station - Al Nahda' },
    type: { ar: 'تطوير وتأهيل', en: 'Development & Rehabilitation' },
    location: { ar: 'الرياض', en: 'Riyadh' },
    categoryId: 'development',
    image: '/assets/project-nahda-1.jpg',
    gallery: [],
    shortDescription: {
      ar: 'مشروع تطوير وتحديث البنية التحتية والتشطيبات لمحطة جي أويل في حي النهضة.',
      en: 'Infrastructure and finishes development project for J-OIL station in Al Nahda.',
    },
  },
  {
    id: '6',
    slug: 'joil-munsiyah',
    status: 'completed',
    title: { ar: 'محطة جي أويل - المونسية 2', en: 'J-OIL Station - Al Munsiyah 2' },
    type: { ar: 'تطوير وتأهيل', en: 'Development & Rehabilitation' },
    location: { ar: 'الرياض', en: 'Riyadh' },
    categoryId: 'development',
    image: '/assets/project-munsiyah-1.jpg',
    gallery: [],
    shortDescription: {
      ar: 'تطوير متكامل لمحطة جي أويل في المونسية 2 وفق أحدث المعايير.',
      en: 'Integrated development for J-OIL station in Al Munsiyah 2 according to the latest standards.',
    },
  },
  {
    id: '7',
    slug: 'joil-sahaba',
    status: 'completed',
    title: { ar: 'محطة جي أويل - الصحابة', en: 'J-OIL Station - Al Sahaba' },
    type: { ar: 'تطوير وتأهيل', en: 'Development & Rehabilitation' },
    location: { ar: 'الرياض', en: 'Riyadh' },
    categoryId: 'development',
    image: '/assets/project-sahaba-1.jpg',
    gallery: ['/assets/project-sahaba-2.jpg', '/assets/project-sahaba-3.jpg'],
    shortDescription: {
      ar: 'إعادة تأهيل متكاملة وتطوير لمحطة جي أويل في حي الصحابة.',
      en: 'Complete rehabilitation and development for J-OIL station in Al Sahaba district.',
    },
  },
  {
    id: '8',
    slug: 'joil-qurtubah',
    status: 'completed',
    title: { ar: 'محطة جي أويل - قرطبة', en: 'J-OIL Station - Qurtubah' },
    type: { ar: 'تطوير وتأهيل', en: 'Development & Rehabilitation' },
    location: { ar: 'الرياض', en: 'Riyadh' },
    categoryId: 'development',
    image: '/assets/project-qurtubah-1.jpg',
    gallery: [],
    shortDescription: {
      ar: 'أعمال التطوير لمحطة جي أويل في حي قرطبة وتحديث الهوية.',
      en: 'Development works for J-OIL station in Qurtubah district and identity update.',
    },
  },
  {
    id: '9',
    slug: 'go-narjis',
    status: 'completed',
    title: { ar: 'جو استيشن - النرجس', en: 'GO Station - Al Narjis' },
    type: { ar: 'تطوير وتأهيل', en: 'Development & Rehabilitation' },
    location: { ar: 'الرياض', en: 'Riyadh' },
    categoryId: 'development',
    image: '/assets/project-narjis-1.jpg',
    gallery: [],
    shortDescription: {
      ar: 'تطوير وتأهيل محطة جو استيشن في حي النرجس بالرياض.',
      en: 'Development and rehabilitation of GO Station in Al Narjis district, Riyadh.',
    },
  },
];
