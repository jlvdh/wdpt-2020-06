describe('we\'re creating a catfunction', () => {
  it('should put mr. in front of cat name', () => {
    expect(typeof catFunction).toBe('function')
    expect(catFunction('Wiggles')).toBe('mr. Wiggles')
  })
  it('should put mrs. in front of cat name',()=>{
    expect(catFunction('Wiggles','female')).toBe('mrs. Wiggles')
  })
})