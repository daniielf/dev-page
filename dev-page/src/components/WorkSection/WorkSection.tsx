import styles from './styles.module.css';

type Props = {
  backgroundColor?: string;
  title: string;
  startDate: number;
  endDate?: number;

}

export const WorkSection = ({backgroundColor, startDate, title}: Props) => {
  return (
    <div className={styles.section} style={{backgroundColor}}>
      <span className={styles.year}>
        {startDate}
      </span>
      <div className={styles.mainContent}>
        <h3 className={styles.title}>
          {title}
        </h3>
        <span className={styles.description}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi adipisci, incidunt totam voluptatibus reiciendis explicabo earum ratione suscipit exercitationem doloremque velit, dolores dolorem tempore ut hic provident illo ipsum ea.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi adipisci, incidunt totam voluptatibus reiciendis explicabo earum ratione suscipit exercitationem doloremque velit, dolores dolorem tempore ut hic provident illo ipsum ea.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi adipisci, incidunt totam voluptatibus reiciendis explicabo earum ratione suscipit exercitationem doloremque velit, dolores dolorem tempore ut hic provident illo ipsum ea.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi adipisci, incidunt totam voluptatibus reiciendis explicabo earum ratione suscipit exercitationem doloremque velit, dolores dolorem tempore ut hic provident illo ipsum ea.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi adipisci, incidunt totam voluptatibus reiciendis explicabo earum ratione suscipit exercitationem doloremque velit, dolores dolorem tempore ut hic provident illo ipsum ea.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi adipisci, incidunt totam voluptatibus reiciendis explicabo earum ratione suscipit exercitationem doloremque velit, dolores dolorem tempore ut hic provident illo ipsum ea.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi adipisci, incidunt totam voluptatibus reiciendis explicabo earum ratione suscipit exercitationem doloremque velit, dolores dolorem tempore ut hic provident illo ipsum ea.
        </span>

      </div>
    </div>
  )
}