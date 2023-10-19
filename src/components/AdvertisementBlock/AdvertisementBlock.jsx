import Styles from './AdvertisementBlock.module.scss';

const AdvertisementBlock = () => {
  return (
    <div className={Styles.Container}>
      <div className={Styles.BoxContainer}>
        <div className={Styles.TitleContainer}>
          <h2 className={Styles.Title}>спамеры больше не&nbsp;отвлекут от&nbsp;важных дел </h2>
          <img src={img} alt='' />
        </div>
        <p className={Styles.Subtext}>
          Сервис блокирует все входящие спам-звонки и&nbsp;подозрительные номера. Информация о&nbsp;заблокированных вызовах будет отражаться
          в&nbsp;мобильном приложении.
        </p>
      </div>
    </div>
  );
};

export { AdvertisementBlock };
