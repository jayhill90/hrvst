/* eslint-disable */
export default function Release( {title, label, writeup, url, coverpath, released} ) {
    return (
        <div class= "max-w-full rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
            <a href={url} target="_blank">
                <img class="rounded-t-lg grayscale hover:grayscale-0 transition-all duration-500" src={ coverpath } alt="HRVST cover artworkt" />
            </a>
            <div class="p-5">
                <h5 class="mb-1 text-xl font-bold tracking-tight text-white">{title} &#91;{label}&#93;</h5>
                <p class="mb-3 pb-8 font-normal text-gray-700 dark:text-gray-400">{ writeup }</p>
                <a href={ url } target="_blank" class="inline-flex items-center rounded-lg bg-gray-900 px-3 py-2 text-center text-sm font-medium text-white hover:bg-black focus:outline-none focus:ring-4 focus:ring-blue-300">
                { released ? "Stream / Purchase" : "Pre-order / Pre-Save" }
                <svg aria-hidden="true" class="ml-2 -mr-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
      </div>
    )
}