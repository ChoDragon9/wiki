const expect = require('expect')
const {parser} = require('../json_parser')

describe('json_parser', () => {
  it('parser', () => {
    // Given
    const html = '{"key1": "value1", "key2": "value2"}'

    // When
    const result = parser(html)

    // Then
    expect(result).toEqual({
      key1: "value1",
      key2: "value2"
    })
  })
  it('parser - Object', () => {
    // Given
    const html = '{"key1": {"key1_1":"value1_1"}, "key2": {"key2_1":"value2_1", "key2_2":"value2_2"}}'

    // When
    const result = parser(html)

    // Then
    expect(result).toEqual({
      key1: {
        key1_1: "value1_1"
      },
      key2: {
        key2_1: "value2_1",
        key2_2: "value2_2"
      }
    })
  })
  it('parser - Array', () => {
    // Given
    const html = '{"key1": {"key1_1":"value1_1"}, "key2": ["value2_1", "value2_2"]}'

    // When
    const result = parser(html)

    // Then
    expect(result).toEqual({
      key1: {
        key1_1: "value1_1"
      },
      key2: ["value2_1", "value2_2"]
    })
  })
  it('parser - Number', () => {
    // Given
    const html = '{"key0": 0, "key1": -1, "key2", 12345}'

    // When
    const result = parser(html)

    // Then
    expect(result).toEqual({
      key0: 0,
      key1: -1,
      key2: 12345
    })
  })
})
