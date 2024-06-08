import { title } from '@/components/title'
import { author } from '@/components/author'
import { body } from '@/components/body'

const main = document.querySelector('#main')!

const wrapper = document.createElement('div')
wrapper.style.width = '300px'

wrapper.appendChild(title)
wrapper.appendChild(author)
wrapper.appendChild(body)

main.appendChild(wrapper)
