import Article from "../components/Article"
import CardBlog from "../components/CardBlog"
import HeaderImg from "../components/HeaderImg"

export default function Article2() {
    return (
        <>
            <HeaderImg
                url={"/images/blog-section.jpg"}
                section={"WELCOME TO OUR NEW WEBSITE!"}
            />
            <section className="flex justify-center mt-20 mb-20">
                <CardBlog
                    url={"/images/Sisters-Mission.jpg"}
                    title={"Welcome to the inaugural Mercy Clinic website!"}
                    date={"Mar 07, 18"}
                    description={
                        <Article
                            en={
                                <>
                                    <p>
                                        You can’t begin to imagine how long I’ve
                                        waited to state that. This brand new
                                        website is just one of many endeavors we
                                        have undertaken at Mercy Clinic all in
                                        an effort to provide better service to
                                        this beloved community. Mercy Clinic
                                        began formalizing a Strategic Plan to
                                        make improvements to the delivery of
                                        care for our patients. The Mercy Clinic
                                        Strategic Plan 2017-2020 is now a year
                                        old and we have made progress on several
                                        of the objectives and there is more to
                                        come. Please allow me to share just a
                                        few of the efforts currently underway:
                                    </p>
                                    <br />
                                    <ul className="list-disc ml-12 flex flex-col gap-4">
                                        <li>
                                            A new Mercy Clinic promotional card
                                            is now available.
                                        </li>
                                        <li>
                                            The PHC card is now renewable
                                            annually.
                                        </li>
                                        <li>
                                            Mercy Matters TV show is on Public
                                            Access Channel & is on-going.
                                        </li>
                                        <li>
                                            Suggestion boxes are available
                                            throughout the clinic for co-worker
                                            and patients to submit their ideas.
                                        </li>
                                        <li>
                                            Patient surveys available in the
                                            waiting room areas.
                                        </li>
                                        <li>
                                            Mercy Clinic has expanded Integrated
                                            Behavioral Healthcare model to all
                                            patients.
                                        </li>
                                        <li>
                                            We have begun a Quality Improvement
                                            Plan for the entire clinic.
                                        </li>
                                        <li>
                                            BOGO program is in place & we have
                                            more than 80 new patients!
                                        </li>
                                        <li>
                                            New policies are under development
                                            and old policies are being review
                                            and revised as needed.
                                        </li>
                                        <li>
                                            All leaders will be reviewing
                                            co-worker goals on an on-going basis
                                            not just annually.
                                        </li>
                                        <li>
                                            Started working with a consultant
                                            (Lee + Associates) in the areas of
                                            staff and board development.
                                        </li>
                                        <li>
                                            A Mercy Clinic Advisory Board has
                                            been established and led by
                                            Elizabeth Martinez.
                                        </li>
                                        <li>
                                            TV spots are now airing in English &
                                            Spanish on local TV stations & on
                                            the radio.
                                        </li>
                                        <li>And this brand new website!</li>
                                    </ul>
                                    <br />
                                    <p>
                                        You will be hearing much more about each
                                        of these initiatives and others still in
                                        the works. All this stems from a belief
                                        that our foundress Catherine McAuley
                                        treasured dearly – we can be good today
                                        but we can be better tomorrow.
                                    </p>
                                    <br />
                                    <p>
                                        At Mercy Clinic every co-worker is
                                        responsible for the mission of Mercy –
                                        As the Sisters of Mercy before us, we
                                        bring to life the healing ministry of
                                        Jesus through our compassionate care and
                                        exceptional service.
                                    </p>
                                </>
                            }
                            es={
                                <>
                                    <p>
                                        No puedes imaginar cuánto tiempo he
                                        esperado para decir esto. Este nuevo
                                        sitio web es solo una de las muchas
                                        iniciativas que hemos emprendido en
                                        Mercy Clinic con el objetivo de brindar
                                        un mejor servicio a esta querida
                                        comunidad. Mercy Clinic comenzó a
                                        formalizar un Plan Estratégico para
                                        mejorar la atención a nuestros
                                        pacientes. El Plan Estratégico de Mercy
                                        Clinic 2017-2020 ya tiene un año y hemos
                                        avanzado en varios de los objetivos, y
                                        aún hay más por venir. Permíteme
                                        compartir solo algunos de los esfuerzos
                                        que estamos llevando a cabo actualmente:
                                    </p>
                                    <br />
                                    <ul className="list-disc ml-12 flex flex-col gap-4">
                                        <li>
                                            Ya está disponible una nueva tarjeta
                                            promocional de Mercy Clinic.
                                        </li>
                                        <li>
                                            La tarjeta PHC ahora se puede
                                            renovar anualmente.
                                        </li>
                                        <li>
                                            El programa de televisión Mercy
                                            Matters se transmite por el canal de
                                            acceso público y sigue en emisión.
                                        </li>
                                        <li>
                                            Hay buzones de sugerencias
                                            disponibles en toda la clínica para
                                            que compañeros de trabajo y
                                            pacientes puedan enviar sus ideas.
                                        </li>
                                        <li>
                                            Encuestas para pacientes disponibles
                                            en las salas de espera.
                                        </li>
                                        <li>
                                            Mercy Clinic ha ampliado el modelo
                                            de Atención Integral de Salud
                                            Conductual para todos los pacientes.
                                        </li>
                                        <li>
                                            Hemos comenzado un Plan de Mejora de
                                            la Calidad para toda la clínica.
                                        </li>
                                        <li>
                                            El programa BOGO está en marcha ¡y
                                            ya contamos con más de 80 nuevos
                                            pacientes!
                                        </li>
                                        <li>
                                            Se están desarrollando nuevas
                                            políticas y se están revisando y
                                            actualizando las antiguas según sea
                                            necesario.
                                        </li>
                                        <li>
                                            Todos los líderes revisarán los
                                            objetivos de los compañeros de
                                            trabajo de forma continua, no solo
                                            una vez al año.
                                        </li>
                                        <li>
                                            Hemos comenzado a trabajar con una
                                            consultora (Lee + Associates) en el
                                            desarrollo del personal y del
                                            consejo directivo.
                                        </li>
                                        <li>
                                            Se ha establecido un Consejo Asesor
                                            de Mercy Clinic, dirigido por
                                            Elizabeth Martínez.
                                        </li>
                                        <li>
                                            Anuncios televisivos se están
                                            transmitiendo ahora en inglés y
                                            español en canales locales de TV y
                                            en la radio.
                                        </li>
                                        <li>¡Y este nuevo sitio web!</li>
                                    </ul>
                                    <br />
                                    <p>
                                        Pronto escucharás mucho más sobre cada
                                        una de estas iniciativas y otras que aún
                                        están en proceso. Todo esto nace de una
                                        creencia muy apreciada por nuestra
                                        fundadora Catherine McAuley: hoy podemos
                                        ser buenos, pero mañana podemos ser
                                        mejores.
                                    </p>
                                    <br />
                                    <p>
                                        En Mercy Clinic, cada compañero de
                                        trabajo es responsable de la misión de
                                        Mercy: Al igual que las Hermanas de la
                                        Misericordia que nos precedieron, damos
                                        vida al ministerio sanador de Jesús a
                                        través de nuestro cuidado compasivo y
                                        servicio excepcional.
                                    </p>
                                </>
                            }
                        />
                    }
                />
            </section>
        </>
    )
}
