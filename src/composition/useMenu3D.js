export default function useMenu3D() {
  const menuItemsName = ['HOME', 'KEY SKILLS', 'WAY OF DEV', 'LAST WORKS']
  const menuItemLinks = [
    { href: 'https://vk.com/midapa', class: 'fab fa-vk' },
    { href: 'https://www.linkedin.com/in/andrew-ananenko-ba96a5229/', class: 'fab fa-linkedin-in' },
    { href: 'https://github.com/Lormida', class: 'fab fa-github' },
    { href: 'https://www.instagram.com/_mexploit/', class: 'fab fa-instagram' },
  ]

  return {
    menuItemLinks, menuItemsName
  }
}