"use client"

import useTranslation from '../hooks/useTranslation';
import useIntersectionHide from "@/app/hooks/useIntersectionHide";
import {useFormattedText} from "@/app/hooks/useFormattedText";

export default function EducationalSimulationGamePage() {
    const { t } = useTranslation('common')
    const { f } = useFormattedText();
    const [sec1Ref, isSec1Hidden] = useIntersectionHide();
    const [sec2Ref, isSec2Hidden] = useIntersectionHide();
    const [sec3Ref, isSec3Hidden] = useIntersectionHide();

    return (
        <section className='educational_simulation_game_page page sub_page'>
            <div className='container'>
                <div ref={sec1Ref} className={`content open ${isSec1Hidden ? 'hidden' : ''}`}>
                    <h1>{t('educational_simulation_game_title1')}</h1>
                    <div className='text'>
                        <p>{f(t('educational_simulation_game_text1'))}</p>
                        <p>{f(t('educational_simulation_game_text2'))}</p>
                    </div>
                    <div className="divider"/>
                    <div className='text'>
                        <h2>{t('educational_simulation_game_title2')}</h2>
                        <p>{f(t('educational_simulation_game_text3'))}</p>
                        <ul>
                            <li>{f(t('educational_simulation_game_text4'))}</li>
                            <li>{f(t('educational_simulation_game_text5'))}</li>
                            <li>{f(t('educational_simulation_game_text6'))}</li>
                        </ul>
                        <p>{f(t('educational_simulation_game_text7'))}</p>
                    </div>
                    <div className="divider"/>
                </div>
                <div ref={sec2Ref} className={`content open ${isSec2Hidden ? 'hidden' : ''}`}>
                    <div className='text'>
                        <h2>{t('educational_simulation_game_title3')}</h2>
                        <p>{f(t('educational_simulation_game_text8'))}</p>
                        <ul>
                            <li>{f(t('educational_simulation_game_text9'))}</li>
                            <li>{f(t('educational_simulation_game_text10'))}</li>
                            <li>{f(t('educational_simulation_game_text11'))}</li>
                        </ul>
                        <p>{f(t('educational_simulation_game_text12'))}</p>
                    </div>
                    <div className="divider"/>
                    <div className='text'>
                        <h2>{t('educational_simulation_game_title4')}</h2>
                        <p>{f(t('educational_simulation_game_text13'))}</p>
                        <ul>
                            <li>{f(t('educational_simulation_game_text14'))}</li>
                            <li>{f(t('educational_simulation_game_text15'))}</li>
                            <li>{f(t('educational_simulation_game_text16'))}</li>
                        </ul>
                        <p>{f(t('educational_simulation_game_text17'))}</p>
                    </div>
                    <div className="divider"/>
                </div>
                <div ref={sec3Ref} className={`content open ${isSec3Hidden ? 'hidden' : ''}`}>
                    <div className='text'>
                        <h2>{t('educational_simulation_game_title5')}</h2>
                        <p>{f(t('educational_simulation_game_text18'))}</p>
                        <ul>
                            <li>{f(t('educational_simulation_game_text19'))}</li>
                            <li>{f(t('educational_simulation_game_text20'))}</li>
                            <li>{f(t('educational_simulation_game_text21'))}</li>
                            <li>{f(t('educational_simulation_game_text22'))}</li>
                        </ul>
                    </div>
                    <div className="divider"/>
                    <div className='text'>
                        <h2>{t('educational_simulation_game_title6')}</h2>
                        <p>{f(t('educational_simulation_game_text23'))}</p>
                        <ul>
                            <li>{f(t('educational_simulation_game_text24'))}</li>
                            <li>{f(t('educational_simulation_game_text25'))}</li>
                            <li>{f(t('educational_simulation_game_text26'))}</li>
                            <li>{f(t('educational_simulation_game_text27'))}</li>
                            <li>{f(t('educational_simulation_game_text28'))}</li>
                        </ul>
                        <p>{f(t('educational_simulation_game_text29'))}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}