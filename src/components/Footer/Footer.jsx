import React from 'react';
import Container from '@components/ui/Container/Container';

import Styles from './Footer.module.scss';

const BlockContent = () => {
    return (
        <Container>
            <div className={Styles.Block}>
               <div className={Styles.Footer}>
                   <div className={Styles.LeftLink}>
                        <div>
                        Политика обработки файлов cookie
                        </div>
                       <div>
                           Политика обработки персональных данных
                       </div>

                   </div>
                   <div className={Styles.RightLink}>
                       <div>Продукт разработан командой FutureCrew</div>
                       <div>© 2023. Все права защищены</div>
                   </div>
               </div>
            </div>
        </Container>
    );
};

export default BlockContent;
