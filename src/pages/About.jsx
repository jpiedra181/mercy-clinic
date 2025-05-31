import Article from "../components/Article"
import CardAbout from "../components/CardAbout"
import HeaderImg from "../components/HeaderImg"
import TeamCard from "../components/TeamCard"

export default function About() {
    return (
        <>
            <HeaderImg url={"/images/hero-img-1.jpg"} section={"ABOUT US"} />
            <section className="mt-20 mb-20">
                <p className="text-lg font-bold text-gray-700 text-center">
                    MERCY CLINIC LAREDO
                </p>
                <p className="text-2xl font-bold text-center">
                    ``...IN 1843, THE SISTERS OF MERCY CAME TO THE UNITED
                    STATES``
                </p>
            </section>
            <section className="bg-[#acacac] flex justify-center items-center px-8 md:px-16 xl:px-70 2xl:px-96 py-20">
                <section className="flex flex-col md:flex-row px-12 bg-white">
                    <article className="flex flex-col">
                        <article className="flex flex-col">
                            <Article
                                en={
                                    <>
                                        <h3 className="text-xl font-bold">
                                            About Us
                                        </h3>
                                        <img src="/icons/hr.png" alt="" />
                                        <p>
                                            The Sisters of Mercy heritage goes
                                            back more than 185 years.It began
                                            with an Irish woman named Catherine
                                            McAuley, who wanted to help the poor
                                            women and children of Dublin. Though
                                            Catherine had a modest upbringing,
                                            she received an unexpected
                                            inheritance that allowed her to
                                            fulfill her dreams.
                                        </p>
                                        <br />
                                        <p>
                                            In 1827, she opened the first House
                                            of Mercy in Dublin, intending to
                                            teach skills to poor women and
                                            educate children. Many volunteers
                                            came to help. A few years later,
                                            Catherine founded the Sisters of
                                            Mercy, the first religious order not
                                            bound to the rules of the cloister,
                                            whose Sisters were free to walk
                                            among the poor and visit them in
                                            their homes.
                                        </p>
                                        <br />
                                        <p>
                                            By the time Catherine died in 1841,
                                            there were convents in Ireland and
                                            England, and in 1843, the Sisters of
                                            Mercy came to the United States.
                                        </p>
                                        <br />
                                        <p>
                                            In 1871, they traveled to St. Louis
                                            and from there throughout the
                                            Midwest, beginning what would, today
                                            be known as Mercy.
                                        </p>
                                        <br />
                                        <p>
                                            The history between Laredo and Mercy
                                            began when two Sisters of Mercy, at
                                            the invitation of city leaders and
                                            their Bishop, arrived in 1894.
                                            Within just a few weeks, they had
                                            opened the city’s first hospital,
                                            caring for the needs of a small but
                                            growing community.
                                        </p>
                                        <br />
                                        <p>
                                            After experiencing the compassionate
                                            and exceptional care of the Sisters,
                                            Laredoans embraced them as their
                                            own. And under the Sisters’
                                            leadership, the ministry grew.
                                        </p>
                                        <br />
                                        <p>
                                            With economic pressures mounting,
                                            the Sisters bequeathed their large
                                            hospital to others in 2003 but
                                            refocused their energies of meeting
                                            the needs of the city’s most
                                            vulnerable men and women.
                                        </p>
                                        <br />
                                        <p>
                                            Mercy Ministries of Laredo is a
                                            non-profit which sponsors Mercy
                                            Clinic and Casa de Misericordia, a
                                            shelter for women and children
                                            dealing with the scourge of domestic
                                            violence.
                                        </p>
                                        <br />
                                        <p>
                                            Mercy Clinic is Laredo’s only
                                            faith-based health care provider and
                                            serves adults with limited financial
                                            income who do not have health
                                            insurance. To preserve the respect
                                            and dignity of those we serve, small
                                            co-pays, in proportion to need, are
                                            the responsibility of each patient.
                                            This makes sure patients are
                                            partners and advocates of their own
                                            health care.
                                        </p>
                                        <br />
                                        <p>
                                            Primary health care services are
                                            also delivered to medically
                                            underserved areas in rural and
                                            inner-city neighborhoods through the
                                            Mercy Mobile Clinic. The mobile
                                            clinic travels throughout the
                                            community to bring compassionate
                                            care and exceptional service to
                                            those who cannot come to us.
                                        </p>
                                        <br />
                                        <p>
                                            The ministry also makes use of
                                            promotoras, outreach community
                                            workers, to visit patients in their
                                            homes, building trust and
                                            relationships. Through home visits
                                            and public presentations, the
                                            promotoras offer education to help
                                            people lead healthier lives.
                                        </p>
                                        <br />
                                        <p>
                                            Understanding the role of mental
                                            health in overall wellness,
                                            established Mercy Clinic patients
                                            also have access to licensed
                                            professional counseling. This helps
                                            men and women better cope with the
                                            stress, fear and anxiety so common
                                            in today’s world.
                                        </p>
                                        <br />
                                        <p>
                                            Excellent primary care services,
                                            however, is not always enough to
                                            meet the needs of our patients. Our
                                            staff helps patients use existing
                                            programs to afford their
                                            medications. We assist patients who
                                            need medical procedures beyond the
                                            scope of our care. We make dental
                                            care available on site each week. We
                                            partner with other providers to
                                            offer foot and eye care. And we
                                            offer free exercise classes as just
                                            one part of an integrated behavioral
                                            health care model that restores
                                            health while honoring the dignity of
                                            each person.
                                        </p>
                                        <br />
                                        <p>
                                            As the only faith-based medical
                                            clinic in this region, Mercy does
                                            not receive direct funding from the
                                            state or federal government and is
                                            heavily reliant on the generosity of
                                            this community and those who believe
                                            in its mission to continue providing
                                            healthcare to those most in need.
                                        </p>
                                        <br />
                                        <p>
                                            The work of the Sisters of Mercy and
                                            committed laypeople endures at 2500
                                            Zacatecas Street, strengthening
                                            Laredo and those who live on the
                                            economic margins of society.
                                            Together, we can continue to build a
                                            community where everyone has the
                                            opportunity to be well.
                                        </p>
                                    </>
                                }
                                es={
                                    <>
                                        <h3 className="text-xl font-bold">
                                            Sobre Nosotros
                                        </h3>
                                        <img src="/icons/hr.png" alt="" />
                                        <p>
                                            El legado de las Hermanas de la
                                            Misericordia se remonta a más de 185
                                            años.
                                        </p>
                                        <br />
                                        <p>
                                            Comenzó con una mujer irlandesa
                                            llamada Catherine (Catalina)
                                            McAuley, que quería ayudar a las
                                            mujeres y niños pobres de Dublín.
                                            Aunque Catalina tuvo una educación
                                            modesta, recibió una herencia
                                            inesperada que le permitió cumplir
                                            sus sueños.
                                        </p>
                                        <br />
                                        <p>
                                            En 1827, abrió la primera Casa de la
                                            Misericordia en Dublín, con la
                                            intención de enseñar habilidades a
                                            las mujeres pobres y educar a los
                                            niños. Muchos voluntarios vinieron a
                                            ayudar. Unos años después, Catalina
                                            fundó las Hermanas de la
                                            Misericordia, la primera orden
                                            religiosa que no estaba sujeta a las
                                            reglas del claustro, cuyas Hermanas
                                            podían caminar libremente entre los
                                            pobres y visitarlos en sus hogares.
                                        </p>
                                        <br />
                                        <p>
                                            Para cuando Catalina murió en 1841,
                                            había conventos en Irlanda e
                                            Inglaterra, y en 1843, las Hermanas
                                            de la Misericordia llegaron a los
                                            Estados Unidos.
                                        </p>
                                        <br />
                                        <p>
                                            En 1871, viajaron a St. Louis y de
                                            allí a todo el Medio Oeste,
                                            comenzando lo que hoy se conocería
                                            como Mercy.
                                        </p>
                                        <br />
                                        <p>
                                            La historia de Laredo y la de Mercy
                                            han sido entretejidas por más de
                                            124-años.
                                        </p>
                                        <br />
                                        <p>
                                            Invitado por el Señor Obispo y el
                                            liderazgo de la ciudad, dos Hermanas
                                            de la Misericordia llegaron a Laredo
                                            en el 1894. Dentro de algunas
                                            semanas, las Hermanas abrieron las
                                            puertas al primer hospital en Laredo
                                            ofreciendo servicios a una pequeña
                                            comunidad.
                                        </p>
                                        <br />
                                        <p>
                                            Después de ser testigos al cuidado
                                            compasivo y excepcional de las
                                            Hermanas de la Misericordia,
                                            Laredenses las aceptaron como parte
                                            de nuestra familia. Y el ministerio
                                            continuo creciendo bajo el liderazgo
                                            de la Hermanas.
                                        </p>
                                        <br />
                                        <p>
                                            Con las presiones económicas en
                                            aumento, las Hermanas legaron su
                                            gran hospital a otros en 2003.
                                            Luego, reenfocaron sus energías de
                                            proveer servicios a los hombres y
                                            mujeres más vulnerables de la
                                            comunidad.
                                        </p>
                                        <br />
                                        <p>
                                            Mercy Ministries of Laredo es un sin
                                            fines de lucro que patrocina Mercy
                                            Clinic y Casa de Misericordia, un
                                            albergue para mujeres y niños que
                                            sufren de la violencia doméstica
                                        </p>
                                        <br />
                                        <p>
                                            Mercy Clinic es el único proveedor
                                            de servicios médicos guillado por la
                                            fe. Ubicada en 2500 Calle Zacatecas,
                                            Mercy Clinic ofrece servicios
                                            médicos para adultos que no tienen
                                            seguro de salud. Mercy Clinic cobra
                                            un pago para sus servicios en un
                                            esfuerzo para preservar la dignidad
                                            y el respeto de cada paciente y para
                                            asegurar que cada paciente se
                                            invierte en el mantenimiento de su
                                            propia salud
                                        </p>
                                        <br />
                                        <p>
                                            Y para los pacientes que no tienen
                                            una manera de viajar a la clínica de
                                            salud, el Mercy Mobile Clinic lleva
                                            servicios primarios a nuestras
                                            vecindades. La unidad móvil viaja a
                                            través de la comunidad entregando
                                            cuidado compasivo y un servicio
                                            excepcional a aquellos que no puedan
                                            asistir a Mercy Clinic.
                                        </p>
                                        <br />
                                        <p>
                                            Mercy Clinic también utiliza a las
                                            promotoras quienes visitan pacientes
                                            en sus hogares fomentado la
                                            confianza y relaciones. A través de
                                            visitas domiciliarias y
                                            presentaciones públicas, las
                                            promotoras ofrecen educación para
                                            ayudar a las personas a llevar una
                                            vida más saludable.
                                        </p>
                                        <br />
                                        <p>
                                            Reconociendo el papel de la salud
                                            mental en el bienestar general, los
                                            pacientes establecidos de la Clínica
                                            Mercy también tienen acceso a una
                                            consejera profesional. Esto ayuda a
                                            los pacientes a lidiar mejor con el
                                            estrés y la ansiedad tan comunes en
                                            el mundo de hoy.
                                        </p>
                                        <br />
                                        <p>
                                            Sin embargo, los excelentes
                                            servicios de atención primaria no
                                            siempre son suficientes para
                                            satisfacer las necesidades de
                                            nuestros pacientes.
                                        </p>
                                        <br />
                                        <p>
                                            Nuestro personal ayuda a los
                                            pacientes a adquirir medicamentos.
                                            Asistimos a pacientes que necesitan
                                            procedimientos médicos fuera del
                                            alcance de nuestro cuidado. Hacemos
                                            el cuidado dental disponible cada
                                            semana. Nos asociamos con otros
                                            proveedores para ofrecer cuidado de
                                            pies y ojos. Y ofrecemos clases
                                            gratuitas de ejercicio. Todo esto
                                            como parte de un modelo integrado de
                                            atención de salud conductual que
                                            restaura la salud mientras honrando
                                            la dignidad de cada persona.
                                        </p>
                                        <br />
                                        <p>
                                            Mercy Clinic y su personal están
                                            comprometidos a transformar vidas a
                                            través de la excelencia clínica y la
                                            compasión. Como ministerio guillado
                                            por la fe, Mercy Clinic NO recibe
                                            directamente fondos estatales o
                                            federales. En su lugar, Mercy Clinic
                                            cuenta con la generosidad de la
                                            comunidad para seguir cuidando a los
                                            más necesitados.
                                        </p>
                                        <br />
                                        <p>
                                            El trabajo de las Hermanas de la
                                            Misericordia y personal laicos
                                            perdura en 2500 de la calle
                                            Zacatecas, fortaleciendo a Laredo y
                                            a quienes viven en los márgenes
                                            económicos de la sociedad. Juntos,
                                            podemos continuar construyendo una
                                            comunidad donde todos tengan la
                                            oportunidad de mantener su salud.
                                        </p>
                                    </>
                                }
                            />
                        </article>
                        <article>
                            <Article
                                en={
                                    <>
                                        <h3 className="text-xl font-bold">
                                            Our History
                                        </h3>
                                        <img src="/icons/hr.png" alt="" />
                                        <p>
                                            The history of Laredo and Mercy has
                                            been woven together for 124-years.
                                        </p>
                                        <br />
                                        <p>
                                            Invited by city leaders and their
                                            Bishop, two Sisters of Mercy arrived
                                            in 1894. Within just a few weeks,
                                            they had opened the city’s first
                                            hospital, caring for the needs of a
                                            small but growing community.
                                        </p>
                                        <br />
                                        <p>
                                            After experiencing the compassionate
                                            and exceptional care of the Sisters,
                                            Laredoans embraced them as their
                                            own. And under the Sisters’
                                            leadership, the ministry grew.
                                        </p>
                                        <br />
                                        <p>
                                            With economic pressures mounting,
                                            the Sisters bequeathed their large
                                            hospital to others in 2003 but
                                            refocused their energies of meeting
                                            the needs of the city’s most
                                            vulnerable men and women.
                                        </p>
                                        <br />
                                        <p>
                                            Mercy Ministries of Laredo is a
                                            non-profit which sponsors Mercy
                                            Clinic and Casa de Misericordia, a
                                            shelter for women and children
                                            dealing with the scourge of domestic
                                            violence.
                                        </p>
                                        <br />
                                        <p>
                                            Mercy Clinic is Laredo’s only
                                            faith-based health care provider and
                                            serves adults with limited financial
                                            income who do not have health
                                            insurance. To preserve the respect
                                            and dignity of those we serve, small
                                            co-pays, in proportion to need, are
                                            the responsibility of each patient.
                                            This makes sure patients are
                                            partners and advocates of their own
                                            health care.
                                        </p>
                                        <br />
                                        <p>
                                            Primary health care services are
                                            also delivered to medically
                                            underserved areas in rural and
                                            inner-city neighborhoods through the
                                            Mercy Mobile Clinic. The mobile
                                            clinic travels throughout the
                                            community to bring compassionate
                                            care and exceptional service to
                                            those who cannot come to us.
                                        </p>
                                        <br />
                                        <p>
                                            The ministry also makes use of
                                            promotoras, outreach community
                                            workers, to visit patients in their
                                            homes, building trust and
                                            relationships. Through home visits
                                            and public presentations, the
                                            promotoras offer education to help
                                            people lead healthier lives.
                                        </p>
                                        <br />
                                        <p>
                                            Understanding the role of mental
                                            health in overall wellness,
                                            established Mercy Clinic patients
                                            also have access to licensed
                                            professional counseling. This helps
                                            men and women better cope with the
                                            stress, fear and anxiety so common
                                            in today’s world.
                                        </p>
                                        <br />
                                        <p>
                                            Excellent primary care services,
                                            however, is not always enough to
                                            meet the needs of our patients.
                                        </p>
                                        <br />
                                        <p>
                                            Our staff helps patients use
                                            existing programs to afford their
                                            medications. We assist patients who
                                            need medical procedures beyond the
                                            scope of our care. We make dental
                                            care available on site each week. We
                                            partner with other providers to
                                            offer foot and eye care. And we
                                            offer free exercise classes as just
                                            one part of an integrated behavioral
                                            health care model that restores
                                            health while honoring the dignity of
                                            each person.
                                        </p>
                                        <br />
                                        <p>
                                            As the only faith-based medical
                                            clinic in this region, Mercy does
                                            not receive direct funding from the
                                            state or federal government and is
                                            heavily reliant on the generosity of
                                            this community and those who believe
                                            in its mission to continue providing
                                            healthcare to those most in need.
                                        </p>
                                        <br />
                                        <p>
                                            The work of the Sisters of Mercy and
                                            committed laypeople endures at 2500
                                            Zacatecas Street, strengthening
                                            Laredo and those who live on the
                                            economic margins of society.
                                            Together, we can continue to build a
                                            community where everyone has the
                                            opportunity to be well.
                                        </p>
                                        <br />
                                        <p></p>
                                    </>
                                }
                                es={
                                    <>
                                        <h3 className="text-xl font-bold">
                                            Nuestra Historia
                                        </h3>
                                        <img src="/icons/hr.png" alt="" />
                                        <p>
                                            La historia de Laredo y la de Mercy
                                            han sido entretejidas por más de
                                            124-años.
                                        </p>
                                        <br />
                                        <p>
                                            Invitado por el Señor Obispo y el
                                            liderazgo de la ciudad, dos Hermanas
                                            de la Misericordia llegaron a Laredo
                                            en el 1894. Dentro de algunas
                                            semanas, las Hermanas abrieron las
                                            puertas al primer hospital en Laredo
                                            ofreciendo servicios a una pequeña
                                            comunidad.
                                        </p>
                                        <br />
                                        <p>
                                            Después de ser testigos al cuidado
                                            compasivo y excepcional de las
                                            Hermanas de la Misericordia,
                                            Laredenses las aceptaron como parte
                                            de nuestra familia. Y el ministerio
                                            continuo creciendo bajo el liderazgo
                                            de la Hermanas.
                                        </p>
                                        <br />
                                        <p>
                                            Con las presiones económicas en
                                            aumento, las Hermanas legaron su
                                            gran hospital a otros en 2003.
                                            Luego, reenfocaron sus energías de
                                            proveer servicios a los hombres y
                                            mujeres más vulnerables de la
                                            comunidad.
                                        </p>
                                        <br />
                                        <p>
                                            Mercy Ministries of Laredo es un sin
                                            fines de lucro que patrocina Mercy
                                            Clinic y Casa de Misericordia, un
                                            albergue para mujeres y niños que
                                            sufren de la violencia doméstica.
                                        </p>
                                        <br />
                                        <p>
                                            Mercy Clinic es el único proveedor
                                            de servicios médicos guillado por la
                                            fe. Ubicada en 2500 Calle Zacatecas,
                                            Mercy Clinic ofrece servicios
                                            médicos para adultos que no tienen
                                            seguro de salud. Mercy Clinic cobra
                                            un pago para sus servicios en un
                                            esfuerzo para preservar la dignidad
                                            y el respeto de cada paciente y para
                                            asegurar que cada paciente se
                                            invierte en el mantenimiento de su
                                            propia salud.
                                        </p>
                                        <br />
                                        <p>
                                            Y para los pacientes que no tienen
                                            una manera de viajar a la clínica de
                                            salud, el Mercy Mobile Clinic lleva
                                            servicios primarios a nuestras
                                            vecindades. La unidad móvil viaja a
                                            través de la comunidad entregando
                                            cuidado compasivo y un servicio
                                            excepcional a aquellos que no puedan
                                            asistir a Mercy Clinic.
                                        </p>
                                        <br />
                                        <p>
                                            Mercy Clinic también utiliza a las
                                            promotoras quienes visitan pacientes
                                            en sus hogares fomentado la
                                            confianza y relaciones. A través de
                                            visitas domiciliarias y
                                            presentaciones públicas, las
                                            promotoras ofrecen educación para
                                            ayudar a las personas a llevar una
                                            vida más saludable.
                                        </p>
                                        <br />
                                        <p>
                                            Reconociendo el papel de la salud
                                            mental en el bienestar general, los
                                            pacientes establecidos de la Clínica
                                            Mercy también tienen acceso a una
                                            consejera profesional. Esto ayuda a
                                            los pacientes a lidiar mejor con el
                                            estrés y la ansiedad tan comunes en
                                            el mundo de hoy.
                                        </p>
                                        <br />
                                        <p>
                                            Sin embargo, los excelentes
                                            servicios de atención primaria no
                                            siempre son suficientes para
                                            satisfacer las necesidades de
                                            nuestros pacientes.
                                        </p>
                                        <br />
                                        <p>
                                            Nuestro personal ayuda a los
                                            pacientes a adquirir medicamentos.
                                            Asistimos a pacientes que necesitan
                                            procedimientos médicos fuera del
                                            alcance de nuestro cuidado. Hacemos
                                            el cuidado dental disponible cada
                                            semana. Nos asociamos con otros
                                            proveedores para ofrecer cuidado de
                                            pies y ojos. Y ofrecemos clases
                                            gratuitas de ejercicio. Todo esto
                                            como parte de un modelo integrado de
                                            atención de salud conductual que
                                            restaura la salud mientras honrando
                                            la dignidad de cada persona.
                                        </p>
                                        <br />
                                        <p>
                                            Mercy Clinic y su personal están
                                            comprometidos a transformar vidas a
                                            través de la excelencia clínica y la
                                            compasión. Como ministerio guillado
                                            por la fe, Mercy Clinic NO recibe
                                            directamente fondos estatales o
                                            federales. En su lugar, Mercy Clinic
                                            cuenta con la generosidad de la
                                            comunidad para seguir cuidando a los
                                            más necesitados.
                                        </p>
                                        <br />
                                        <p>
                                            El trabajo de las Hermanas de la
                                            Misericordia y personal laicos
                                            perdura en 2500 de la calle
                                            Zacatecas, fortaleciendo a Laredo y
                                            a quienes viven en los márgenes
                                            económicos de la sociedad. Juntos,
                                            podemos continuar construyendo una
                                            comunidad donde todos tengan la
                                            oportunidad de mantener su salud.
                                        </p>
                                    </>
                                }
                            />
                        </article>
                    </article>
                    <article className="flex flex-col">
                        <article>
                            <CardAbout
                                url={"/images/about-1.jpg"}
                                title={"Mission, Vision & Values"}
                                description={
                                    <>
                                        <p>
                                            We are the people of Mercy Health
                                            Ministry. Together, we are
                                            pioneering a new model of care. We
                                            will relentlessly pursue our goal to
                                            get health care right. Everywhere
                                            and every way that Mercy serves, we
                                            will deliver a transformative health
                                            experience.
                                        </p>
                                        <p>
                                            Como las Hermanas de la Misericordia
                                            que nos precedieron, damos vida al
                                            ministerio de sanación de Jesus a
                                            través de nuestro cuidado compasivo
                                            y servicio excepcional.
                                        </p>
                                    </>
                                }
                                cta={true}
                            />
                            <CardAbout
                                url={"/images/about-2.jpg"}
                                title={"More on Catherine Mcauley"}
                                description={
                                    "The Woman Who Made Mercy Possible"
                                }
                                cta={true}
                            />
                            <CardAbout
                                url={"/images/about-3.jpg"}
                                cta={false}
                            />
                            <CardAbout
                                url={"/images/about-4.jpg"}
                                cta={false}
                            />
                            <CardAbout
                                url={"/images/about-5.jpg"}
                                cta={false}
                            />
                        </article>
                    </article>
                </section>
            </section>
            <section className="flex flex-col items-center gap-12 mt-20 mb-20">
                <div>
                    <p className="text-lg font-bold text-gray-700 text-center">
                        MEET OUR EXPERIENCED TEAM
                    </p>
                    <p className="text-2xl font-bold text-center">
                        WE ARE EXPERTS IN OUR FIELD
                    </p>
                </div>
                <article className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-8 md:px-16 xl:px-70 2xl:px-96">
                    <TeamCard
                        url={"/images/Team_10.jpg"}
                        title={"Senior Leadership Team"}
                        description={
                            "Led by MML President Sister Maria Luisa Vera, RSM, the Senior Leadership comprises of VP/Fiscal Officer Elizabeth “Libbie” Casso, Clinic Director Fernandina Garcia, Director of Development Goyo López, Director of ..."
                        }
                    />
                    <TeamCard
                        url={"/images/Team_1.jpg"}
                        title={"Exercise Instructors"}
                        description={
                            "Juanita Vasquez and Edna Garcia Jones lead exercise classes for Mercy Clinic patients.  The low-impact, high energy classes help clinic patients get their daily physical activity.  The classes are free ... "
                        }
                    />
                    <TeamCard
                        url={"/images/Team_2.jpg"}
                        title={"Nurse Educators"}
                        description={
                            "Carmen Bruni, Issa Arredondo and David Rodriguez provide education and training as well as monitoring of disease markers in patients diagnosed with a chronic illness.  They also conducts classes on ... "
                        }
                    />
                    <TeamCard
                        url={"/images/Team_3.jpg"}
                        title={"Patient Representatives"}
                        description={
                            "Led by Libbie Casso & Becky Quintero, Patient Representatives Rosie Gonzalez, Hortensia Palacios & Guadalupe Mata are the first co-workers to greet & welcome patients to Mercy Clinic.  They also ..."
                        }
                    />
                    <TeamCard
                        url={"/images/Team_4.jpg"}
                        title={"Providers"}
                        description={
                            "This experienced group of providers attends to the behavioral and physiological needs of Mercy Clinic patients.  Ana L. Garza, Mary Hernandez & Natalie Burkhalter serve as Family Nurse Practitioners.  Dolores .."
                        }
                    />
                    <TeamCard
                        url={"/images/Team_5.jpg"}
                        title={"Records, Pharmacy Tech & MOA"}
                        description={
                            "Sonia Flores oversees the functions of the Medical Records Office while Lydia Garza oversees the Medication Assistance Program.  Sandra Orozco & Judith Reyna perform patient intake in preparation for appointments ... "
                        }
                    />
                    <TeamCard
                        url={"/images/Team_6.jpg"}
                        title={"Social Workers & Case Managers"}
                        description={
                            "Maribel Quiroz, Elizabeth Martinez, Blanca Ayala, Adriana Cates & Diana Gonzalez are part of the multi-disciplinary team that reviews difficult and complex cases.  Together, they determine patient eligibility, guide patients ... "
                        }
                    />
                    <TeamCard
                        url={"/images/Team_7.jpg"}
                        title={"Promotoras & Medical Mobile Clinic"}
                        description={
                            "Mercy Clinic’s community outreach representatives include Sylvia Ramirez, Rosie Ramirez, Mirtha Trejo, Blasita Esparza & are led by Sister Rosemary Welsh.  The Promotoras make home visits, conduct platicas and conduct ..."
                        }
                    />
                    <TeamCard
                        url={"/images/Team_8.jpg"}
                        title={"Dental Clinic Staff"}
                        description={
                            "Attending to the dental services for Mercy Clinic patients are a group of dentists led by Dr. Carmen Ramirez Rathmell and Dr. J. Manuel Gonzalez with the assistance of Sylvia ..."
                        }
                    />
                </article>
            </section>
            <section className="flex flex-col gap-6 w-screen items-center mb-20">
                <div className="max-w-[600px]">
                    <img
                        src="/images/Team_9.jpg"
                        alt=""
                        className="rounded-[24px]"
                    />
                </div>
                <div className="max-w-[500px] flex flex-col gap-2">
                    <h3 className="font-bold text-center">
                        Sister Rosemary Welsh, Sister Maria Luisa Vera & Sister
                        Olivia Obregon
                    </h3>
                    <p className="text-sm italic text-gray-600 text-center">
                        Mercy Clinic Laredo
                    </p>
                </div>
            </section>
        </>
    )
}
