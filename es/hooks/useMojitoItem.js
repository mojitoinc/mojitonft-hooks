import { useMemo } from 'react';
import { getPath } from '../utils';
import { useCollection } from './useCollection';
export function useMojitoItem(props) {
  if (props === void 0) {
    props = {};
  }

  var _a = useCollection({
    url: props.url,
    slug: props.slug,
    options: props.options
  }),
      collection = _a.collection,
      isAuction = _a.isAuction,
      isFakeAuction = _a.isFakeAuction,
      isLoading = _a.isLoading;

  var itemSlug = getPath[3];
  var mojitoItemByPath = useMemo(function () {
    var _a, _b;

    return (props === null || props === void 0 ? void 0 : props.id) ? (_a = collection === null || collection === void 0 ? void 0 : collection.items) === null || _a === void 0 ? void 0 : _a.find(function (e) {
      return e.id == props.id;
    }) : (_b = collection === null || collection === void 0 ? void 0 : collection.items) === null || _b === void 0 ? void 0 : _b.find(function (e) {
      return e.slug == itemSlug;
    });
  }, [itemSlug, props === null || props === void 0 ? void 0 : props.id, collection === null || collection === void 0 ? void 0 : collection.items]);
  return {
    slug: isAuction || isFakeAuction ? itemSlug : '',
    isLoading: isLoading,
    mojitoItem: mojitoItemByPath
  };
}