import { TrainingArea, MethodStep, FacilitySpace, Trainer, Testimonial, Plan } from '../types';

import heroImg from '../assets/images/hero_aurea_performance_1790826920112.jpg';
import recoveryImg from '../assets/images/facility_recovery_suite_1790826930359.jpg';
import marinaImg from '../assets/images/trainer_marina_duarte_1790826939993.jpg';
import lucasImg from '../assets/images/trainer_lucas_almeida_1790826949519.jpg';
import gymDetailImg from '../assets/images/gym_precision_detail_1790826959491.jpg';

export const ASSETS = {
  hero: heroImg,
  recovery: recoveryImg,
  marina: marinaImg,
  lucas: lucasImg,
  gymDetail: gymDetailImg,
};

export const PERFORMANCE_METRICS = [
  {
    value: "+38%",
    label: "Evolução média de performance",
    detail: "Mensurada após 90 dias com nosso protocolo integrado",
  },
  {
    value: "4.8/5",
    label: "Satisfação dos alunos",
    detail: "Auditoria contínua de adesão e resultados individuais",
  },
  {
    value: "12",
    label: "Modalidades e protocolos",
    detail: "Da força máxima à regeneração metabólica celular",
  },
  {
    value: "1",
    label: "Acompanhamento personalizado",
    detail: "Um ecossistema técnico focado estritamente na sua evolução",
  },
];

export const METHOD_STEPS: MethodStep[] = [
  {
    number: "01",
    title: "Avaliar",
    tagline: "Diagnóstico profundo e mensuração biomecânica",
    description: "Nenhum treino se inicia sem dados. Realizamos baropodometria, dinamometria, análise cinemática de movimento e mapeamento de assimetrias posturais.",
    deliverables: [
      "Mapeamento cinemático 3D",
      "Teste de mobilidade funcional",
      "Composição corporal por bioimpedância médica",
      "Definição de limiares anaeróbicos",
    ],
    duration: "Sessão inicial de 90 min",
  },
  {
    number: "02",
    title: "Planejar",
    tagline: "Engenharia de treino sob medida",
    description: "Cruzamos sua rotina, objetivos e laudo biomecânico em um micro e mesociclo milimetricamente calculado, evitando sobrecargas inúteis e estagnação.",
    deliverables: [
      "Periodização ondulatória diária",
      "Prescrição de volume e intensidade individualizada",
      "Zoneamento de frequência cardíaca",
      "Planejamento de regeneração ativa",
    ],
    duration: "Construção do plano em até 48h",
  },
  {
    number: "03",
    title: "Executar",
    tagline: "Treinamento com supervisão técnica contínua",
    description: "Cada repetição conta. Nossos treinadores corrigem vetores de força em tempo real, garantindo precisão biomecânica absoluta e intensidade na medida certa.",
    deliverables: [
      "Ajuste postural contínuo",
      "Controle de velocidade de deslocamento de barra (VBT)",
      "Monitoramento de prontidão neuromuscular",
      "Ambiente de alta concentração",
    ],
    duration: "Sessões dinâmicas de 50 a 65 min",
  },
  {
    number: "04",
    title: "Evoluir",
    tagline: "Reavaliação e ajuste fino periódico",
    description: "A evolução é um ciclo fechado de retroalimentação. A cada 45 dias, retestamos cada parâmetro para comprovar ganhos reais e recalibrar novas metas.",
    deliverables: [
      "Comparativo quantitativo de curvas de força",
      "Relatório de mobilidade articular",
      "Ajustes de carga e cadência",
      "Próximo ciclo de supercompensação",
    ],
    duration: "Reavaliações sistemáticas a cada 45 dias",
  },
];

export const TRAINING_AREAS: TrainingArea[] = [
  {
    id: "performance",
    title: "Performance",
    subtitle: "Potência, velocidade e resposta neuromuscular",
    description: "Foco no desenvolvimento de potência pico, transferência de força e eficiência energética para esportistas e pessoas que buscam o ápice físico.",
    highlights: ["Sistemas pneumáticos Keiser", "Plataformas de força Bertec", "Pista de sprint indoor"],
    metrics: "Ganho médio de 24% em potência pico",
    focus: "Explosão muscular e economia de movimento",
  },
  {
    id: "forca",
    title: "Força",
    subtitle: "Sobrecarga progressiva e hipertrofia funcional",
    description: "A base de toda sustentação corporal. Trabalhamos padrões fundamentais com equipamentos suecos calibrados e anilhas de competição.",
    highlights: ["Barras e anilhas Eleiko certificadas", "Racks modulares customizados", "Manoplas ergonômicas micro-ajustáveis"],
    metrics: "+32% em força isométrica e dinâmica",
    focus: "Densidade óssea, massa magra e estabilidade",
  },
  {
    id: "mobilidade",
    title: "Mobilidade",
    subtitle: "Amplitude articular, liberação e controle motor",
    description: "Liberdade articular para treinar sem dores e evitar compensações. Sessões dedicadas a descompressão fascial e ativação escapular/quadril.",
    highlights: ["Estruturas de suspensão e tração", "Espaldar sueco em madeira nobre", "Acessórios de liberação miofascial"],
    metrics: "Redução de 89% em queixas de tensão crônica",
    focus: "Saúde articular e prevenção de lesões",
  },
  {
    id: "condicionamento",
    title: "Condicionamento",
    subtitle: "Capacidade cardiorrespiratória e resistência metabólica",
    description: "Treinos metabólicos orientados por zonas de frequência cardíaca. Trabalho intervalado de alta densidade sem impacto destrutivo nas articulações.",
    highlights: ["Esteiras curvas Woodway", "Remo e SkiErg Concept2", "Bikes Wattbike com análise de pedalada"],
    metrics: "+18% de incremento no VO2 max médio",
    focus: "Resistência celular e eficiência mitocondrial",
  },
  {
    id: "funcional",
    title: "Treinamento Funcional",
    subtitle: "Movimentos integrados nos três planos espaciais",
    description: "Preparação física multiplanar que conecta o corpo como uma unidade sinérgica. Rotações, acelerações, desacelerações e estabilização de core.",
    highlights: ["Piso absorvente de impacto premium", "Sleds e trenós em grama sintética", "Kettlebells calibrados de competição"],
    metrics: "+41% em estabilidade de tronco e core",
    focus: "Agilidade motora e coordenação complexa",
  },
  {
    id: "personalizado",
    title: "Treinamento Personalizado",
    subtitle: "Acompanhamento exclusivo one-on-one",
    description: "Atendimento individual com seu treinador dedicado. Cada minuto da sessão é planejado estritamente segundo suas particularidades fisiológicas.",
    highlights: ["Box reservado para atendimento privado", "Controle métrico via tablet por repetição", "Comunicação direta com o corpo técnico"],
    metrics: "100% de adesão aos objetivos definidos",
    focus: "Máxima especificidade e acompanhamento",
  },
];

export const FACILITY_SPACES: FacilitySpace[] = [
  {
    id: "musculacao",
    name: "Área de Musculação Biomecânica",
    category: "Força e Hipertrofia",
    description: "Maquinário biomecânico importado da Alemanha e Suécia com curvas de resistência congruentes com a anatomia humana, eliminando pontos de estresse desnecessário nos tendões.",
    features: [
      "Equipamentos com ajuste milimétrico",
      "Iluminação indireta suave (3000K) sem ofuscamento",
      "Espaçamento amplo entre aparelhos (mínimo 2,20m)",
    ],
    techEquipments: "Eleiko, Gym80 & Atlantis Strength",
    areaSize: "520 m² climatizados a 20°C constantes",
    image: ASSETS.hero,
  },
  {
    id: "funcional",
    name: "Espaço de Treinamento Funcional & Agilidade",
    category: "Movimento Integrado",
    description: "Pista interna de grama sintética de alta densidade para trenós, racks modulares suspensos e área livre de 360° para exercícios balísticos e pliométricos.",
    features: [
      "Grama de tração rápida de 25m",
      "Absorção acústica de 45dB para impacto de cargas",
      "Sensores de fotocélula para velocidade e tempo de reação",
    ],
    techEquipments: "Keiser Air300 & Woodway Curve",
    areaSize: "310 m² com pé-direito duplo de 5,5m",
    image: ASSETS.gymDetail,
  },
  {
    id: "mobilidade",
    name: "Área de Mobilidade e Liberação Articular",
    category: "Flexibilidade & Preparação",
    description: "Ambiente sereno em piso de carvalho maciço escovado e espaldar sueco para preparação pré-treino, ganho de amplitude de movimento e trabalho respiratório.",
    features: [
      "Piso aquecido para descompressão",
      "Racks de liberação fascial com rolos de densidades distintas",
      "Tratamento de ar com filtragem HEPA contínua",
    ],
    techEquipments: "Hyperice Venom & Espaldar Olímpico",
    areaSize: "140 m² dedicados",
  },
  {
    id: "avaliacao",
    name: "Laboratório de Avaliação Biomecânica",
    category: "Ciência do Esporte",
    description: "Sala clínica climatizada onde são realizados todos os testes fisiológicos, dinamometria, análise tridimensional da pisada e exames de bioimpedância de padrão hospitalar.",
    features: [
      "Câmeras de alta taxa de quadros (240fps)",
      "Plataforma de salto Optojump",
      "Relatório integrado entregue no app proprietário",
    ],
    techEquipments: "InBody 770 & Kistler Force Plate",
    areaSize: "65 m² com isolamento acústico",
  },
  {
    id: "recuperacao",
    name: "Suíte de Recuperação e Biohacking",
    category: "Regeneração & Wellness",
    description: "Estrutura dedicada à aceleração da recuperação muscular e diminuição da dor tardia. Banhos de gelo com controle digital de temperatura, botas pneumáticas e sauna seca.",
    features: [
      "Banheiras de crioterapia a 4°C com filtração por ozônio",
      "Pressoterapia ativa sequencial NormaTec",
      "Sauna seca em madeira cedro com cromoterapia",
    ],
    techEquipments: "NormaTec 3 & Cold Plunge Chiller Pro",
    areaSize: "180 m² com vestiário anexo",
    image: ASSETS.recovery,
  },
  {
    id: "vestiarios",
    name: "Vestiários Spa & Relaxamento",
    category: "Conforto Pessoal",
    description: "Cabines de banho individuais em mármore cinza fosco, amenities veganos selecionados, toalhas de algodão egípcio e armários digitais com pontos de recarga USB-C.",
    features: [
      "Duchas pressurizadas de alta vazão",
      "Secadores Dyson Supersonic profissionais",
      "Serviço de lavanderia rápida de vestuário esportivo",
    ],
    techEquipments: "Dyson & Grohe Rainshower",
    areaSize: "220 m² privativos",
  },
  {
    id: "recepcao",
    name: "Recepção, Concierge & Lounge Café",
    category: "Boas-vindas",
    description: "Recepção minimalista sem catracas invasivas: check-in por reconhecimento facial silencioso. Café de pequenos produtores brasileiros e shakes proteicos sob medida.",
    features: [
      "Check-in touchless biométrico",
      "Bar de espresso e nutrição pós-treino",
      "Espaço de coworking e espera confortável com Wi-Fi 6",
    ],
    techEquipments: "La Marzocco Linea Mini",
    areaSize: "110 m² integrados",
  },
];

export const STUDENT_JOURNEY = [
  {
    step: "01",
    title: "Avaliação Inicial",
    description: "Entrevista profunda de anamnese clínica, teste de mobilidade, dinamometria e análise postural estática e dinâmica.",
    detail: "Duração: 90 minutos com fisiologista do exercício",
  },
  {
    step: "02",
    title: "Definição de Objetivos",
    description: "Alinhamento transparente de expectativas, prazos realistas e métricas-chave que guiarão o programa de treinamento.",
    detail: "Mapeamento de indicadores primários e secundários",
  },
  {
    step: "03",
    title: "Plano de Treinamento",
    description: "Desenvolvimento do ciclo personalizado com determinação exata de frequências, cargas de trabalho e métodos de recuperação.",
    detail: "Periodização estruturada em microciclos de 6 semanas",
  },
  {
    step: "04",
    title: "Acompanhamento Ativo",
    description: "Supervisão técnica presencial em cada sessão, com correção postural minuciosa e registro digital do volume de treino.",
    detail: "Suporte diário da equipe técnica de plantão",
  },
  {
    step: "05",
    title: "Reavaliação Contínua",
    description: "Coleta comparativa de dados após 45 dias para auditar evolução de força, composição corporal e amplitude articular.",
    detail: "Relatório visual com percentuais de avanço",
  },
  {
    step: "06",
    title: "Evolução e Ajuste Fino",
    description: "Avanço para novos patamares de sobrecarga e estímulos motores. O treino se adapta conforme seu corpo se transforma.",
    detail: "Progressão sem estagnação ou desmotivação",
  },
];

export const TRAINERS: Trainer[] = [
  {
    id: "marina-duarte",
    name: "Marina Duarte",
    role: "Head de Performance e Força",
    specialtyTag: "Biomecânica do Levantamento & VBT",
    bio: "Ex-atleta de levantamento olímpico e mestre em Fisiologia do Exercício pela USP. Especialista em calibração de vetores de força e otimização neuromuscular para atletas de alto rendimento e executivos.",
    credentials: [
      "Mestrado em Fisiologia do Exercício (USP)",
      "Certificação CSCS (NSCA)",
      "Especialista em Velocity Based Training",
    ],
    image: ASSETS.marina,
  },
  {
    id: "lucas-almeida",
    name: "Lucas Almeida",
    role: "Mobilidade e Condicionamento",
    specialtyTag: "Saúde Articular & Bioenergética",
    bio: "Graduado em Educação Física com especialização em controle motor e reabilitação funcional pelo Instituto Mauá. Desenvolve protocolos de mobilidade para prevenção de lesões e capacidade aeróbica avançada.",
    credentials: [
      "Pós-graduação em Biomecânica Clínica",
      "Certificado FMS Nível 2",
      "Consultor de Bioenergética e VO2",
    ],
    image: ASSETS.lucas,
  },
  {
    id: "rafael-torres",
    name: "Rafael Torres",
    role: "Treinamento Personalizado & Coordenação",
    specialtyTag: "Periodização & Hipertrofia Funcional",
    bio: "Mais de 14 anos de experiência na preparação física de executivos, médicos e maratonistas. Responsável pela metodologia de periodização individualizada da AUREA e auditoria técnica de resultados.",
    credentials: [
      "Especialista em Treinamento de Força Avançado",
      "Membro da American College of Sports Medicine (ACSM)",
      "Mais de 6.000 horas de prescrição individual",
    ],
    image: ASSETS.hero,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Eduardo Camargo",
    role: "Diretor de Operações em Tecnologia",
    goal: "Eliminar dores lombares e recompor condicionamento",
    timeframe: "Aluno há 8 meses",
    quote: "Minha rotina é imprevisível e exigente. O diferencial da AUREA é que eles não me entregam uma ficha genérica. Cada sessão é calibrada de acordo com o meu nível de fadiga do dia. Zerei dores de 6 anos e aumentei minha carga em 40%.",
    metricsResult: "+42% em força de tronco e zero episódios de dor",
  },
  {
    id: "t2",
    name: "Dra. Beatriz Menezes",
    role: "Médica Cirurgiã Ortopédica",
    goal: "Resistência postural para cirurgias longas e hipertrofia",
    timeframe: "Aluna há 14 meses",
    quote: "Como médica, sou extremamente crítica quanto a posturas e sobrecargas erradas. A precisão anatômica dos treinadores da AUREA é impecável. Os equipamentos têm ângulos perfeitos e o recovery com crioterapia transformou minha disposição semanal.",
    metricsResult: "Ganho de 3,8kg de massa magra e 100% de estabilidade escapular",
  },
  {
    id: "t3",
    name: "Guilherme Siqueira",
    role: "Maratonista Amador e Empresário",
    goal: "Potência de corrida e prevenção de lesões de joelho",
    timeframe: "Aluno há 11 meses",
    quote: "Sempre achei que musculação pesada atrapalhasse a corrida. A AUREA me provou o oposto com dados na mão: ganhei força reativa, melhorei meu pace na maratona de 3h42 para 3h18 e passei o ano sem nenhuma canelite.",
    metricsResult: "Sub 3h20 na Maratona e +22% de potência nos membros inferiores",
  },
];

export const PLANS: Plan[] = [
  {
    id: "start",
    name: "START",
    tagline: "Para quem busca autonomia com a máxima precisão de treino",
    price: "R$ 780",
    period: "/mês",
    idealFor: "Pessoas com boa disciplina de execução que exigem maquinário de excelência e estrutura silenciosa.",
    assessmentFrequency: "Reavaliação biomecânica a cada 60 dias",
    features: [
      "Acesso irrestrito a todas as áreas de musculação e condicionamento",
      "Avaliação biomecânica completa inicial (90 min)",
      "Prescrição periódica do plano de treino via aplicativo proprietário",
      "Acesso às áreas de mobilidade e alongamento assistido",
      "Vestiários spa com toalhas de algodão e amenities",
      "Recepção concierge e suporte da equipe de salão",
    ],
  },
  {
    id: "performance",
    name: "PERFORMANCE",
    tagline: "Nosso programa central. O equilíbrio ideal entre supervisão e dados",
    price: "R$ 1.350",
    period: "/mês",
    isFeatured: true,
    idealFor: "Quem deseja acompanhamento técnico próximo, métricas detalhadas de evolução e protocolo de recuperação acelerada.",
    assessmentFrequency: "Reavaliação e ajuste de cargas a cada 45 dias",
    features: [
      "Tudo do plano START incluído",
      "Sessões supervisionadas com treinadores dedicados por setor",
      "Acesso completo à Suíte de Recuperação (Crioterapia + NormaTec 2x/semana)",
      "Relatórios quinzenais de prontidão neuromuscular e evolução de carga",
      "Consultoria de hidratação e timing nutricional intra-treino",
      "Armário privativo com carregamento dedicado",
      "Prioridade no agendamento de horários de pico",
    ],
  },
  {
    id: "private",
    name: "PRIVATE",
    tagline: "A experiência máxima de exclusividade e atendimento 1-on-1",
    price: "R$ 2.900",
    period: "/mês",
    idealFor: "Atletas, executivos e pessoas que buscam personal trainer exclusivo integral e integração com equipe médica.",
    assessmentFrequency: "Monitoramento contínuo sessão a sessão",
    features: [
      "Personal Trainer dedicado exclusivo em todas as sessões semanais",
      "Acesso ilimitado à Suíte de Recuperação e Crioterapia",
      "Vestiário privativo individual VIP com sauna reservada",
      "Alinhamento direto entre treinador, seu médico e nutricionista",
      "Serviço de lavanderia expressa diária de vestuário esportivo",
      "Vaga de garagem coberta com serviço de manobrista concierge",
      "Shake de recuperação personalizado preparado no término de cada treino",
    ],
  },
];

export const GALLERY_ITEMS = [
  {
    id: "g1",
    title: "Plataforma de Alta Performance",
    category: "Área de Força",
    aspect: "col-span-1 md:col-span-2 row-span-2",
    image: ASSETS.hero,
    caption: "Pisos com amortecimento de vibração para levantamento olímpico e halteres calibrados.",
  },
  {
    id: "g2",
    title: "Suíte de Recuperação & Crioterapia",
    category: "Recovery & Biohacking",
    aspect: "col-span-1 md:col-span-1 row-span-1",
    image: ASSETS.recovery,
    caption: "Crioterapia a 4°C e pressoterapia NormaTec para aceleração da regeneração celular.",
  },
  {
    id: "g3",
    title: "Precisão em Cada Componente",
    category: "Biomecânica",
    aspect: "col-span-1 md:col-span-1 row-span-1",
    image: ASSETS.gymDetail,
    caption: "Barras e anilhas torneadas em aço nobre sem tolerância para desvios de peso.",
  },
  {
    id: "g4",
    title: "Supervisão e Mentoria Técnica",
    category: "Equipe Editorial",
    aspect: "col-span-1 md:col-span-1 row-span-2",
    image: ASSETS.marina,
    caption: "Treinadores que dominam a ciência do exercício com acompanhamento contínuo.",
  },
  {
    id: "g5",
    title: "Condicionamento e Mobilidade",
    category: "Especialidades",
    aspect: "col-span-1 md:col-span-2 row-span-1",
    image: ASSETS.lucas,
    caption: "Estruturas desenvolvidas para treino integrado nos três planos de movimento.",
  },
];
