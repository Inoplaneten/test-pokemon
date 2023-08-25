import { classNames } from '.'

describe('classNames', () => {
  test('test', () => {
    expect(classNames('someClass')).toBe('someClass')
  })

  test('width additional class', () => {
    const expected = 'someClass class1 class2'
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected)
  })

  test('width mods', () => {
    const expected = 'someClass class1 class2 active hovered'
    expect(classNames(
      'someClass',
      { active: true, hovered: true },
      ['class1', 'class2']
    )).toBe(expected)
  })

  test('width mods false', () => {
    const expected = 'someClass class1 class2 hovered'
    expect(classNames(
      'someClass',
      { active: false, hovered: true },
      ['class1', 'class2']
    )).toBe(expected)
  })

  test('width mods undefined', () => {
    const expected = 'someClass class1 class2 active'
    expect(classNames(
      'someClass',
      { active: false, hovered: undefined },
      ['class1', 'class2']
    )).toBe(expected)
  })
})
