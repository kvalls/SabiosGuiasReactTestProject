import { useEffect } from 'react';
import rss from "../news.xml";

export default function ShowRSSFile() {
  useEffect(() => {
    /* later within the component */
    window.open(rss, '_self');
  })
}