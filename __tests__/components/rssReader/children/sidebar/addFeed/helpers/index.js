/*
   global expect
   global it
   global describe
 */
import {
  isValidUrl,
  isValidName,
  isSubmitEnabled
} from '../../../../../../../src/components/rssReader/children/sidebar/children/addFeed/helpers'

describe('AddFeed - helpers', () => {
  describe('isValidUrl', () => {
    it('returns true when url valid', () => {
      expect(isValidUrl({url: 'https://www.google.com'}))
    })

    it('returns false when url not valid', () => {
      expect(isValidUrl({url: ''}))
      expect(isValidUrl({url: ':///////////234234234@@@__google.com'}))
    })
  })

  describe('isValidName', () => {
    it('returns true when name valid', () => {
      expect(isValidName({feedName: 'Sam'}))
    })

    it('returns false when url not valid', () => {
      expect(isValidName({feedName: ''}))
      expect(isValidName({feedName: ':///////////234234234@@@__google.com'}))
    })
  })

  describe('isSubmitEnabled', () => {
    it('returns true when submit should be enabled', () => {
      expect(isSubmitEnabled({feedName: 'Sam', url: 'https://www.google.com'}))
    })

    it('returns false when submit should not be enabled', () => {
      expect(isSubmitEnabled({}))
      expect(isSubmitEnabled({feedName: 'Name but no url'}))
      expect(isSubmitEnabled({url: 'https://www.namebutnourl.com'}))
    })
  })
})
