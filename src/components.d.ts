/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { IPokemon } from "./interfaces/pokemon";
export namespace Components {
    interface AppRoot {
    }
    interface BerriesCard {
    }
    interface PageFooter {
    }
    interface PageHeader {
    }
    interface PageNotFound {
    }
    interface PagePokebuilder {
    }
    interface PagePokedex {
    }
    interface PokebuilderPokegrid {
        "builder": boolean;
        "pokemon": IPokemon;
        "pokemonDelete": IPokemon;
        "pokemonList": IPokemon[];
        "seeDetails": boolean;
    }
    interface PokebuilderTeam {
        "poketeam": IPokemon[];
    }
    interface PokemonAbility {
        "abilitys": any[];
    }
    interface PokemonAttributes {
        "stat": any;
    }
    interface PokemonCard {
        "builder": boolean;
        "disabled": boolean;
        "listExcist": boolean;
        "pokemon": IPokemon;
    }
    interface PokemonDetail {
    }
    interface PokemonMoves {
        "moves": any[];
        "withSearchFunction": boolean;
    }
    interface PokemonPokedex {
        "builder": boolean;
        "disabled": boolean;
    }
    interface PokemonTypes {
        "types": any;
    }
    interface SearchBar {
    }
}
export interface PokebuilderPokegridCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPokebuilderPokegridElement;
}
export interface PokemonCardCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPokemonCardElement;
}
export interface PokemonPokedexCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPokemonPokedexElement;
}
declare global {
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLBerriesCardElement extends Components.BerriesCard, HTMLStencilElement {
    }
    var HTMLBerriesCardElement: {
        prototype: HTMLBerriesCardElement;
        new (): HTMLBerriesCardElement;
    };
    interface HTMLPageFooterElement extends Components.PageFooter, HTMLStencilElement {
    }
    var HTMLPageFooterElement: {
        prototype: HTMLPageFooterElement;
        new (): HTMLPageFooterElement;
    };
    interface HTMLPageHeaderElement extends Components.PageHeader, HTMLStencilElement {
    }
    var HTMLPageHeaderElement: {
        prototype: HTMLPageHeaderElement;
        new (): HTMLPageHeaderElement;
    };
    interface HTMLPageNotFoundElement extends Components.PageNotFound, HTMLStencilElement {
    }
    var HTMLPageNotFoundElement: {
        prototype: HTMLPageNotFoundElement;
        new (): HTMLPageNotFoundElement;
    };
    interface HTMLPagePokebuilderElement extends Components.PagePokebuilder, HTMLStencilElement {
    }
    var HTMLPagePokebuilderElement: {
        prototype: HTMLPagePokebuilderElement;
        new (): HTMLPagePokebuilderElement;
    };
    interface HTMLPagePokedexElement extends Components.PagePokedex, HTMLStencilElement {
    }
    var HTMLPagePokedexElement: {
        prototype: HTMLPagePokedexElement;
        new (): HTMLPagePokedexElement;
    };
    interface HTMLPokebuilderPokegridElement extends Components.PokebuilderPokegrid, HTMLStencilElement {
    }
    var HTMLPokebuilderPokegridElement: {
        prototype: HTMLPokebuilderPokegridElement;
        new (): HTMLPokebuilderPokegridElement;
    };
    interface HTMLPokebuilderTeamElement extends Components.PokebuilderTeam, HTMLStencilElement {
    }
    var HTMLPokebuilderTeamElement: {
        prototype: HTMLPokebuilderTeamElement;
        new (): HTMLPokebuilderTeamElement;
    };
    interface HTMLPokemonAbilityElement extends Components.PokemonAbility, HTMLStencilElement {
    }
    var HTMLPokemonAbilityElement: {
        prototype: HTMLPokemonAbilityElement;
        new (): HTMLPokemonAbilityElement;
    };
    interface HTMLPokemonAttributesElement extends Components.PokemonAttributes, HTMLStencilElement {
    }
    var HTMLPokemonAttributesElement: {
        prototype: HTMLPokemonAttributesElement;
        new (): HTMLPokemonAttributesElement;
    };
    interface HTMLPokemonCardElement extends Components.PokemonCard, HTMLStencilElement {
    }
    var HTMLPokemonCardElement: {
        prototype: HTMLPokemonCardElement;
        new (): HTMLPokemonCardElement;
    };
    interface HTMLPokemonDetailElement extends Components.PokemonDetail, HTMLStencilElement {
    }
    var HTMLPokemonDetailElement: {
        prototype: HTMLPokemonDetailElement;
        new (): HTMLPokemonDetailElement;
    };
    interface HTMLPokemonMovesElement extends Components.PokemonMoves, HTMLStencilElement {
    }
    var HTMLPokemonMovesElement: {
        prototype: HTMLPokemonMovesElement;
        new (): HTMLPokemonMovesElement;
    };
    interface HTMLPokemonPokedexElement extends Components.PokemonPokedex, HTMLStencilElement {
    }
    var HTMLPokemonPokedexElement: {
        prototype: HTMLPokemonPokedexElement;
        new (): HTMLPokemonPokedexElement;
    };
    interface HTMLPokemonTypesElement extends Components.PokemonTypes, HTMLStencilElement {
    }
    var HTMLPokemonTypesElement: {
        prototype: HTMLPokemonTypesElement;
        new (): HTMLPokemonTypesElement;
    };
    interface HTMLSearchBarElement extends Components.SearchBar, HTMLStencilElement {
    }
    var HTMLSearchBarElement: {
        prototype: HTMLSearchBarElement;
        new (): HTMLSearchBarElement;
    };
    interface HTMLElementTagNameMap {
        "app-root": HTMLAppRootElement;
        "berries-card": HTMLBerriesCardElement;
        "page-footer": HTMLPageFooterElement;
        "page-header": HTMLPageHeaderElement;
        "page-not-found": HTMLPageNotFoundElement;
        "page-pokebuilder": HTMLPagePokebuilderElement;
        "page-pokedex": HTMLPagePokedexElement;
        "pokebuilder-pokegrid": HTMLPokebuilderPokegridElement;
        "pokebuilder-team": HTMLPokebuilderTeamElement;
        "pokemon-ability": HTMLPokemonAbilityElement;
        "pokemon-attributes": HTMLPokemonAttributesElement;
        "pokemon-card": HTMLPokemonCardElement;
        "pokemon-detail": HTMLPokemonDetailElement;
        "pokemon-moves": HTMLPokemonMovesElement;
        "pokemon-pokedex": HTMLPokemonPokedexElement;
        "pokemon-types": HTMLPokemonTypesElement;
        "search-bar": HTMLSearchBarElement;
    }
}
declare namespace LocalJSX {
    interface AppRoot {
    }
    interface BerriesCard {
    }
    interface PageFooter {
    }
    interface PageHeader {
    }
    interface PageNotFound {
    }
    interface PagePokebuilder {
    }
    interface PagePokedex {
    }
    interface PokebuilderPokegrid {
        "builder"?: boolean;
        "onTooMuch"?: (event: PokebuilderPokegridCustomEvent<any>) => void;
        "pokemon"?: IPokemon;
        "pokemonDelete"?: IPokemon;
        "pokemonList"?: IPokemon[];
        "seeDetails"?: boolean;
    }
    interface PokebuilderTeam {
        "poketeam"?: IPokemon[];
    }
    interface PokemonAbility {
        "abilitys"?: any[];
    }
    interface PokemonAttributes {
        "stat"?: any;
    }
    interface PokemonCard {
        "builder"?: boolean;
        "disabled"?: boolean;
        "listExcist"?: boolean;
        "onDeletePokemon"?: (event: PokemonCardCustomEvent<any>) => void;
        "onSendPokemonBack"?: (event: PokemonCardCustomEvent<any>) => void;
        "pokemon"?: IPokemon;
    }
    interface PokemonDetail {
    }
    interface PokemonMoves {
        "moves"?: any[];
        "withSearchFunction"?: boolean;
    }
    interface PokemonPokedex {
        "builder"?: boolean;
        "disabled"?: boolean;
        "onDeletePokemon"?: (event: PokemonPokedexCustomEvent<any>) => void;
        "onSendPokemonBack"?: (event: PokemonPokedexCustomEvent<any>) => void;
    }
    interface PokemonTypes {
        "types"?: any;
    }
    interface SearchBar {
    }
    interface IntrinsicElements {
        "app-root": AppRoot;
        "berries-card": BerriesCard;
        "page-footer": PageFooter;
        "page-header": PageHeader;
        "page-not-found": PageNotFound;
        "page-pokebuilder": PagePokebuilder;
        "page-pokedex": PagePokedex;
        "pokebuilder-pokegrid": PokebuilderPokegrid;
        "pokebuilder-team": PokebuilderTeam;
        "pokemon-ability": PokemonAbility;
        "pokemon-attributes": PokemonAttributes;
        "pokemon-card": PokemonCard;
        "pokemon-detail": PokemonDetail;
        "pokemon-moves": PokemonMoves;
        "pokemon-pokedex": PokemonPokedex;
        "pokemon-types": PokemonTypes;
        "search-bar": SearchBar;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "berries-card": LocalJSX.BerriesCard & JSXBase.HTMLAttributes<HTMLBerriesCardElement>;
            "page-footer": LocalJSX.PageFooter & JSXBase.HTMLAttributes<HTMLPageFooterElement>;
            "page-header": LocalJSX.PageHeader & JSXBase.HTMLAttributes<HTMLPageHeaderElement>;
            "page-not-found": LocalJSX.PageNotFound & JSXBase.HTMLAttributes<HTMLPageNotFoundElement>;
            "page-pokebuilder": LocalJSX.PagePokebuilder & JSXBase.HTMLAttributes<HTMLPagePokebuilderElement>;
            "page-pokedex": LocalJSX.PagePokedex & JSXBase.HTMLAttributes<HTMLPagePokedexElement>;
            "pokebuilder-pokegrid": LocalJSX.PokebuilderPokegrid & JSXBase.HTMLAttributes<HTMLPokebuilderPokegridElement>;
            "pokebuilder-team": LocalJSX.PokebuilderTeam & JSXBase.HTMLAttributes<HTMLPokebuilderTeamElement>;
            "pokemon-ability": LocalJSX.PokemonAbility & JSXBase.HTMLAttributes<HTMLPokemonAbilityElement>;
            "pokemon-attributes": LocalJSX.PokemonAttributes & JSXBase.HTMLAttributes<HTMLPokemonAttributesElement>;
            "pokemon-card": LocalJSX.PokemonCard & JSXBase.HTMLAttributes<HTMLPokemonCardElement>;
            "pokemon-detail": LocalJSX.PokemonDetail & JSXBase.HTMLAttributes<HTMLPokemonDetailElement>;
            "pokemon-moves": LocalJSX.PokemonMoves & JSXBase.HTMLAttributes<HTMLPokemonMovesElement>;
            "pokemon-pokedex": LocalJSX.PokemonPokedex & JSXBase.HTMLAttributes<HTMLPokemonPokedexElement>;
            "pokemon-types": LocalJSX.PokemonTypes & JSXBase.HTMLAttributes<HTMLPokemonTypesElement>;
            "search-bar": LocalJSX.SearchBar & JSXBase.HTMLAttributes<HTMLSearchBarElement>;
        }
    }
}
