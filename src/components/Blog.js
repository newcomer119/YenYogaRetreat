import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import yogaImage from "../assets/img/retreat/yogaImage.jpg";
import hatha from "../assets/img/retreat/hatha.jpg";

const texts = {
  en: {
    title: "Yoga & Wellness Blog",
    description: "Explore our collection of articles about yoga, meditation, and wellness",
    readMore: "Read More",
    readLess: "Read Less",
    blogPosts: [
      {
        title: "The Art of Yin Yoga: Finding Balance in Stillness",
        date: "April 15, 2024",
        excerpt: "Discover how Yin Yoga can help you find deep relaxation and improve flexibility through longer-held poses...",
        fullContent: `Yin Yoga is a transformative practice that invites us to slow down and sink deep into our bodies. Unlike more dynamic styles of yoga, Yin poses are held for 3-5 minutes, allowing us to work with our connective tissues and fascia.

        At Yen Yoga Retreat, we emphasize the importance of this practice for several reasons:

        1. Deep Tissue Work
        - Targets connective tissues, ligaments, and joints
        - Increases flexibility and range of motion
        - Helps prevent injury and promotes healing

        2. Mental Benefits
        - Cultivates mindfulness and patience
        - Reduces stress and anxiety
        - Improves meditation practice

        3. Energy Flow
        - Opens up energy channels (meridians)
        - Balances the body's energy systems
        - Promotes better sleep and digestion

        Our experienced instructors guide you through carefully sequenced poses, ensuring proper alignment and maximum benefit. Each session ends with a deep relaxation period, allowing the body to integrate the practice.

        Join us for our daily Yin Yoga classes and experience the profound benefits of this gentle yet powerful practice.`,
        image: yogaImage,
        readingTime: "5 min read"
      },
      {
        title: "Mindful Living at Yen Yoga Retreat",
        date: "April 10, 2024",
        excerpt: "Experience the transformative power of mindfulness in our peaceful sanctuary...",
        fullContent: `Welcome to a journey of mindful living at Yen Yoga Retreat, where every moment becomes an opportunity for presence and growth.

        Our Approach to Mindful Living:

        1. Daily Mindfulness Practices
        - Morning meditation sessions
        - Mindful walking in our zen garden
        - Conscious eating practices
        - Evening reflection circles

        2. Creating Sacred Spaces
        Our retreat is designed to support your mindfulness journey:
        - Meditation halls overlooking nature
        - Silent areas for contemplation
        - Natural walking paths
        - Peaceful water features

        3. Integrating Mindfulness Into Daily Life
        We teach practical techniques for:
        - Stress management
        - Emotional regulation
        - Better sleep habits
        - Enhanced focus and clarity

        4. Community Support
        - Group sharing sessions
        - Mindful communication workshops
        - Community meals
        - Supportive environment for growth

        Join us for a transformative experience where ancient wisdom meets modern living. Our experienced guides will help you develop a sustainable mindfulness practice that extends far beyond your retreat stay.`,
        image: hatha,
        readingTime: "4 min read"
      }
    ]
  },
  es: {
    title: "Blog de Yoga y Bienestar",
    description: "Explora nuestra colección de artículos sobre yoga, meditación y bienestar",
    readMore: "Leer Más",
    readLess: "Leer Menos",
    blogPosts: [
      {
        title: "El Arte del Yin Yoga: Encontrando el Equilibrio en la Quietud",
        date: "15 de abril de 2024",
        excerpt: "Descubre cómo el Yin Yoga puede ayudarte a encontrar una relajación profunda y mejorar la flexibilidad...",
        fullContent: `Yin Yoga es una práctica transformadora que nos invita a relajarnos y sumergirnos en nuestro cuerpo. A diferencia de los estilos de yoga más dinámicos, las posturas de Yin se mantienen de 3 a 5 minutos, permitiéndonos trabajar con los tejidos conectivos y la fascia.

        En el Retiro Yen Yoga, nos destacamos por la importancia de esta práctica por varias razones:

        1. Trabajo en Tejidos Profundos
        - Se centra en tejidos conectivos, ligamentos y articulaciones
        - Mejora la flexibilidad y la amplitud de movimiento
        - Ayuda a prevenir lesiones y promover la curación

        2. Beneficios Mentales
        - Cultiva la mindfulness y la paciencia
        - Reduce el estrés y la ansiedad
        - Mejora la práctica de la meditación

        3. Flujo de Energía
        - Abre canales de energía (meridianos)
        - Balancea los sistemas energéticos del cuerpo
        - Promueve un mejor sueño y digestión

        Nuestros instructores experimentados te guiarán a través de poses cuidadosamente secuenciadas, asegurando la alineación adecuada y el máximo beneficio. Cada sesión termina con un período de relajación profunda, permitiendo que el cuerpo integre la práctica.

        Únete a nosotros para nuestras clases diarias de Yin Yoga y experimenta los beneficios profundos de esta práctica suave pero poderosa.`,
        image: yogaImage,
        readingTime: "5 min de lectura"
      },
      {
        title: "Vida Consciente en el Retiro Yen Yoga",
        date: "10 de abril de 2024",
        excerpt: "Experimenta el poder transformador de la atención plena en nuestro pacífico santuario...",
        fullContent: `Bienvenido a un viaje de vida consciente en el Retiro Yen Yoga, donde cada momento se convierte en una oportunidad para la presencia y el crecimiento.

        Nuestra Estrategia para Vida Consciente:

        1. Prácticas Diarias de Mindfulness
        - Sesiones de meditación matinal
        - Caminar consciente en nuestro jardín zen
        - Prácticas conscientes de la alimentación
        - Círculos de reflexión nocturna

        2. Crear Espacios Sagrados
        Nuestro retiro está diseñado para apoyar tu viaje hacia la mindfulness:
        - Salas de meditación con vistas a la naturaleza
        - Áreas silenciosas para la contemplación
        - Caminos peatonales naturales
        - Fuentes de agua tranquila

        3. Integrar la Mindfulness en la Vida Cotidiana
        Te enseñamos técnicas prácticas para:
        - Gestión del estrés
        - Regulación emocional
        - Mejores hábitos de sueño
        - Enfoque y claridad mejorados

        4. Apoyo Comunitario
        - Sesiones de compartición grupal
        - Talleres de comunicación consciente
        - Comidas comunitarias
        - Entorno de apoyo para el crecimiento

        Únete a nosotros para una experiencia transformadora donde la sabiduría ancestral se encuentra con la vida moderna. Nuestros guías experimentados te ayudarán a desarrollar una práctica sostenible de mindfulness que se extiende más allá de tu estancia en el retiro.`,
        image: hatha,
        readingTime: "4 min de lectura"
      }
    ]
  }
};

const Blog = () => {
  const { language } = useLanguage();
  const t = texts[language];
  const [expandedPosts, setExpandedPosts] = useState({});

  const togglePost = (index) => {
    setExpandedPosts(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 mt-20">{t.title}</h1>
        <p className="text-xl text-gray-600">{t.description}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {t.blogPosts.map((post, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl max-w-md mx-auto">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <div className="flex justify-between items-center mb-3">
                <span className="text-gray-500 text-sm">{post.date}</span>
                <span className="text-gray-500 text-sm">{post.readingTime}</span>
              </div>
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <div className="text-gray-600 text-sm">
                {expandedPosts[index] ? (
                  <p className="whitespace-pre-line">{post.fullContent}</p>
                ) : (
                  <p>{post.excerpt}</p>
                )}
              </div>
              <button 
                onClick={() => togglePost(index)}
                className="mt-3 bg-blue-600 text-black px-3 py-1.5 rounded-lg hover:bg-blue-700 transition duration-300 text-sm"
              >
                {expandedPosts[index] ? t.readLess : t.readMore}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;