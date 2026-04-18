import { SITE } from "@/lib/site";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

export const metadata = {
  title: `Política de Privacidad | ${SITE.name}`,
  description: `Política de privacidad y protección de datos de ${SITE.name}.`,
};

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl mb-4">
              Política de Privacidad
            </h1>
            <p className="text-lg text-muted-foreground">
              Última actualización: {new Date().toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-foreground prose-h2:text-2xl prose-h2:border-b prose-h2:border-border/50 prose-h2:pb-3 prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-strong:text-foreground">
            
            <h2 className="text-2xl font-bold mb-4" id="introduccion"><span className="text-primary">1.</span> Introducción</h2>
            <p>
              El presente sistema de asistente médico, en adelante “Medly”, tiene como objetivo apoyar la gestión de información médica y el seguimiento de tratamientos entre pacientes y profesionales de la salud.
            </p>
            <p>
              Nos comprometemos a proteger la privacidad, confidencialidad y seguridad de los datos personales y médicos de nuestros usuarios.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-6" id="informacion"><span className="text-primary">2.</span> Información que recopilamos</h2>
            <p>Medly puede recopilar los siguientes datos:</p>
            
            <h3>Datos personales</h3>
            <ul className="space-y-1">
              <li><strong>Nombre completo:</strong> Para identificar al usuario en la plataforma.</li>
              <li><strong>Correo electrónico:</strong> Como medio de contacto y acceso al sistema.</li>
              <li><strong>Edad y Género:</strong> Para personalizar la atención.</li>
            </ul>

            <h3>Datos médicos (sensibles)</h3>
            <ul className="space-y-1">
              <li><strong>Historial clínico y Diagnósticos:</strong> Para llevar un registro preciso.</li>
              <li><strong>Recetas y Tratamientos:</strong> Para el seguimiento adecuado.</li>
              <li><strong>Alergias y Notas médicas:</strong> Información crítica para la seguridad del paciente.</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 mt-6" id="uso"><span className="text-primary">3.</span> Uso de la información</h2>
            <p>La información recopilada será utilizada únicamente para:</p>
            <ul className="space-y-1">
              <li>Gestionar el perfil del usuario.</li>
              <li>Facilitar la comunicación entre paciente y médico.</li>
              <li>Dar seguimiento a tratamientos y recetas médicas.</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 mt-6" id="acceso"><span className="text-primary">4.</span> Acceso y confidencialidad</h2>
            <p>La información médica y personal de cada paciente:</p>
            <ul className="space-y-1">
              <li>Solo será accesible por el propio paciente y el profesional de la salud autorizado.</li>
              <li><strong>No será compartida con terceros</strong> sin consentimiento explícito del usuario, salvo requerimiento legal.</li>
            </ul>
            <p className="mt-4">
              Medly implementa controles de acceso para garantizar que únicamente las personas autorizadas puedan consultar la información.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-6" id="proteccion"><span className="text-primary">5.</span> Protección de datos</h2>
            <p>Se aplican medidas de seguridad técnicas y organizativas, tales como:</p>
            <ul className="space-y-1">
              <li><strong>Cifrado de datos:</strong> En tránsito y en reposo.</li>
              <li><strong>Autenticación segura:</strong> Para proteger las cuentas de usuario.</li>
              <li><strong>Control de accesos:</strong> Basado en roles (paciente/médico).</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 mt-6" id="derechos"><span className="text-primary">6.</span> Derechos del usuario</h2>
            <p>El usuario tiene derecho a:</p>
            <ul className="space-y-1">
              <li><strong>Acceder</strong> a sus datos personales y médicos.</li>
              <li>Solicitar la <strong>corrección</strong> de información inexacta.</li>
              <li>Solicitar la <strong>eliminación</strong> de sus datos.</li>
              <li><strong>Retirar su consentimiento</strong> para el uso de sus datos.</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 mt-6" id="retencion"><span className="text-primary">7.</span> Retención de datos</h2>
            <p>
              Los datos serán almacenados únicamente durante el tiempo necesario para cumplir con los fines establecidos o según lo requerido por la legislación aplicable.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-6" id="cambios"><span className="text-primary">8.</span> Cambios en la política</h2>
            <p>
              Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento. Los cambios serán notificados a través de Medly.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-6" id="contacto"><span className="text-primary">9.</span> Contacto</h2>
            <p>
              Para dudas o solicitudes relacionadas con esta política, el usuario podrá contactar a través de los canales oficiales de Medly escribiendo a <a href={`mailto:${SITE.contactEmail}`} className="text-primary hover:underline font-medium">{SITE.contactEmail}</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}