export interface ScriptureReader {
  id: string;
  title: string;
  description: string;
  url: string;
  image: string;
  alt: string;
  buttonText: string;
}

export const SCRIPTURE_READERS: ScriptureReader[] = [
  {
    id: 'tanach',
    title: 'Tanach Reader',
    description:
      'Read the Jewish Bible online in Hebrew and English. Explore Torah, Nevi\'im, and Ketuvim with search, a Jewish calendar, and a reading schedule — powered by authentic texts from Sefaria.',
    url: 'https://tanach.vercel.app/',
    image: '/images/scripture/tanach.webp',
    alt: 'An open Jewish bible with a Star of David and Hebrew text',
    buttonText: 'Explore Tanach',
  },
  {
    id: 'holy-bible',
    title: 'Holy Bible Reader',
    description:
      'Read the complete Old and New Testament from the World English Bible in a beautiful, modern interface — 39 Old Testament books and 27 New Testament books with full-text search.',
    url: 'https://bible-old-and-new-testament.vercel.app/',
    image: '/images/scripture/holy-bible.webp',
    alt: 'Holy Bible Reader header with Old and New Testament sections',
    buttonText: 'Read the Bible',
  },
  {
    id: 'childrens-bible',
    title: 'Bible Stories for Children',
    description:
      'Read classic Old and New Testament stories from Project Gutenberg in a beautiful, modern interface — Child\'s Story of the Bible and Mother Stories from the New Testament, with listen-along audio.',
    url: 'https://childrens-bible.vercel.app/',
    image: '/images/scripture/childrens-bible.webp',
    alt: 'Bible Stories for Children hero with book icon and Project Gutenberg story collections',
    buttonText: 'Read Bible Stories',
  },
  {
    id: 'book-of-mormon',
    title: 'Book of Mormon Reader',
    description:
      'A scripture reader for the Missionary Edition of The Book of Mormon. Browse 15 books and 239 chapters with full-text search and a listen button for audio playback.',
    url: 'https://book-of-mormon-tan.vercel.app/',
    image: '/images/scripture/book-of-mormon.webp',
    alt: 'Book of Mormon Reader with the missionary edition cover and chapter navigation',
    buttonText: 'Read the Book of Mormon',
  },
  {
    id: 'apocrypha',
    title: 'Apocrypha Reader',
    description:
      'Explore deuterocanonical books, Old Testament pseudepigrapha, and New Testament apocrypha. Browse 16+ collections with chapter navigation, search, and optional audio.',
    url: 'https://old-and-new-testament-apocrypha.vercel.app/',
    image: '/images/scripture/apocrypha.webp',
    alt: 'Apocrypha Reader showing deuterocanonical books and chapter counts',
    buttonText: 'Explore Apocrypha',
  },
  {
    id: 'lost-scriptures',
    title: 'Lost Scriptures',
    description:
      'Books that did not make it into the New Testament — edited by Bart D. Ehrman (Oxford University Press). A responsive, chapter-linked reader with search, a full index, and PDF page ranges.',
    url: 'https://lost-scriptures.vercel.app/',
    image: '/images/scripture/lost-scriptures.webp',
    alt: 'Lost Scriptures reader hero with Start reading call to action',
    buttonText: 'Start Reading',
  },
  {
    id: 'prayer-intentions',
    title: 'Prayer Intentions',
    description:
      'Explore who and what to pray for — 25+ topics with storytelling descriptions, sample prayers, and gentle guidance on when to pray. Search, read-aloud speech mode, and a calm interface for family, healing, peace, and more.',
    url: 'https://prayer-intentions.vercel.app/',
    image: '/images/scripture/prayer-intentions.webp',
    alt: 'Prayer Intentions homepage with prayer topics and search',
    buttonText: 'Explore Prayer Intentions',
  },
];
