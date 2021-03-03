import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
    const contextData = useContext(ChallengesContext);

    console.log(contextData);

    const hasActiveChallenge = true;

    return (
        <div className={styles.challengeBoxContainer}>
            { hasActiveChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe 400 xp!</header>

                    <main>
                        <img src="icons/body.svg" />
                        <strong>Novo desafio</strong>
                        <p>Jogar polo em uma piscina de ácido!!!</p>
                    </main>

                    <footer>
                        <button
                            type="button"
                            className={styles.challengeFailedButton}
                        >
                            Me desculpa, eu falhei!!
                            </button>

                        <button
                            type="button"
                            className={styles.challengeCompletedButton}
                        >
                            Compreensível, tenha um bom dia...
                        </button>

                    </footer>
                </div>
            ) : (
                    <div className={styles.challengeNotActive}>
                        <strong>Inicie um novo ciclo para receber desafios a serem completados</strong>
                        <p>
                            <img src="icons/level-up.svg" alt="Level Up" />
                        Suba seu level completando desafios!
                    </p>
                    </div>
                )}
        </div>
    )
}