'use client';
import { useTheme } from "next-themes"
import styles from './article-footer.module.css'
 
export function ArticleFooter() {
  const { theme } = useTheme()

  return (
    <div>
        <hr style={{margin: '25px 0px'}}/>
        <p style={{marginBottom: '2px'}}>
          Did you enjoy this article? Let me know what you think at <i>aden@bytespring.io</i>
        </p>
        <p style={{marginBottom: '5px', marginTop: '2px'}}>
          If you&apos;d like to keep up to date and get the snippets in the mail, subscribe to my newsletter below 
        </p>
        <form action="https://buttondown.email/api/emails/embed-subscribe/bytespring"
            method="post"
            target="popupwindow"
            onSubmit={async e => window.open('https://buttondown.email/bytespring', 'popupwindow')}
        >
            <div>
              <input type="email" name="email" id="bd-email" className={styles.email} placeholder="cool-dev@gmail.com"/>
              <input type="submit" value="Subscribe" className={theme === 'dark' ? styles.ctaButtonDark : styles.ctaButton}/>
            </div>
        </form>
    </div>
  )
}
 
